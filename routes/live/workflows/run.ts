import { HandlerContext } from "$fresh/server.ts";
import { WorkflowQS } from "$live/actions/workflows/start.ts";
import { Workflow, WorkflowContext } from "$live/blocks/workflow.ts";
import { initOnce } from "$live/commons/workflows/initialize.ts";
import { WorkflowMetadata } from "$live/commons/workflows/types.ts";
import {
  Arg,
  arrToStream,
  Command,
  HttpRunRequest,
  Metadata,
  workflowRemoteRunner,
  workflowWebSocketHandler,
} from "$live/deps.ts";
import type { Manifest } from "$live/live.gen.ts";
import { LiveConfig } from "$live/mod.ts";
import { LiveState } from "$live/types.ts";
import { ConnInfo } from "std/http/server.ts";

export type Props = HttpRunRequest<
  Arg,
  unknown,
  { workflow: Workflow } & Metadata
>;

/**
 * @description Proceed the workflow execution based on the current state of the workflow.
 */
async function runWorkflow(
  props: Props,
  ctx: LiveConfig<unknown, LiveState, Manifest>,
): Promise<Command> {
  const { execution: { metadata } } = props;
  const workflow = metadata!.workflow;
  const handler = workflowRemoteRunner(
    workflow,
    (execution) => new WorkflowContext(ctx, execution),
  );
  const commands = arrToStream(props.results);
  await handler({ ...props, commands });
  return commands.nextCommand();
}

const handleProps = async (
  props: Props,
  ctx: HandlerContext<unknown, LiveConfig<unknown, LiveState, Manifest>>,
) => {
  const metadata = await ctx.state.resolve<WorkflowMetadata>(
    (props?.execution?.metadata ?? {}) as WorkflowMetadata,
  );
  return runWorkflow(
    { ...props, execution: { ...props.execution, metadata } },
    ctx.state,
  );
};

export const handler = async (
  req: Request,
  ctx: HandlerContext<unknown, LiveConfig<unknown, LiveState>>,
): Promise<Response> => {
  initOnce();
  if (req.headers.get("upgrade") === "websocket") {
    const workflow = WorkflowQS.extractFromUrl(req.url);
    if (!workflow) {
      return new Response(null, { status: 501 });
    }
    const workflowFn = await ctx.state.resolve(workflow);
    const handler = workflowWebSocketHandler(
      workflowFn,
      (execution) =>
        new WorkflowContext(
          ctx.state as unknown as LiveConfig<unknown, LiveState, Manifest>,
          execution,
        ),
    );
    return handler(req, ctx as ConnInfo);
  }
  const props: Props = await req.json();
  const resp = await handleProps(
    props,
    ctx as unknown as HandlerContext<
      unknown,
      LiveConfig<unknown, LiveState, Manifest>
    >,
  );
  return new Response(
    JSON.stringify(resp),
    { status: 200 },
  );
};
