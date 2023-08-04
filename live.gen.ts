// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$0 from "./loaders/state.ts";
import * as $$$1 from "./loaders/workflows/get.ts";
import * as $$$2 from "./loaders/workflows/events.ts";
import * as $$$3 from "./loaders/manifest.ts";
import * as $$$$0 from "./routes/_middleware.ts";
import * as $$$$1 from "./routes/live/inspect/[...block].ts";
import * as $$$$2 from "./routes/live/invoke/[...key].ts";
import * as $$$$3 from "./routes/live/invoke/index.ts";
import * as $$$$4 from "./routes/live/editorData.ts";
import * as $$$$5 from "./routes/live/workflows/run.ts";
import * as $$$$6 from "./routes/live/workbench.ts";
import * as $$$$7 from "./routes/live/previews/index.tsx";
import * as $$$$8 from "./routes/live/previews/[...block].tsx";
import * as $$$$9 from "./routes/live/release.ts";
import * as $$$$10 from "./routes/live/_meta.ts";
import * as $$$$11 from "./routes/[...catchall].tsx";
import * as $$$$$$0 from "./handlers/routesSelection.ts";
import * as $$$$$$1 from "./handlers/router.ts";
import * as $$$$$$2 from "./handlers/devPage.ts";
import * as $$$$$$3 from "./handlers/proxy.ts";
import * as $$$$$$4 from "./handlers/fresh.ts";
import * as $$$$$$5 from "./handlers/redirect.ts";
import * as $$$$$$6 from "./handlers/workflowRunner.ts";
import * as $$$$$$$0 from "./pages/LivePage.tsx";
import * as $$$$$$$$0 from "./sections/UseSlot.tsx";
import * as $$$$$$$$1 from "./sections/Slot.tsx";
import * as $$$$$$$$2 from "./sections/EmptySection.tsx";
import * as $$$$$$$$3 from "./sections/PageInclude.tsx";
import * as $$$$$$$$4 from "./sections/Conditional_Beta.tsx";
import * as $$$$$$$$$0 from "./matchers/MatchDate.ts";
import * as $$$$$$$$$1 from "./matchers/MatchUserAgent.ts";
import * as $$$$$$$$$2 from "./matchers/MatchSite.ts";
import * as $$$$$$$$$3 from "./matchers/MatchHost.ts";
import * as $$$$$$$$$4 from "./matchers/MatchCron.ts";
import * as $$$$$$$$$5 from "./matchers/MatchMulti.ts";
import * as $$$$$$$$$6 from "./matchers/MatchRandom.ts";
import * as $$$$$$$$$7 from "./matchers/MatchDevice.ts";
import * as $$$$$$$$$8 from "./matchers/MatchEnvironment.ts";
import * as $$$$$$$$$9 from "./matchers/MatchAlways.ts";
import * as $$$$$$$$$10 from "./matchers/MatchLocation.ts";
import * as $$$$$$$$$$0 from "./flags/audience.ts";
import * as $$$$$$$$$$1 from "./flags/multivariate.ts";
import * as $$$$$$$$$$2 from "./flags/everyone.ts";
import * as $$$$$$$$$$3 from "./flags/flag.ts";
import * as $$$$$$$$$$$0 from "./actions/workflows/start.ts";
import * as $$$$$$$$$$$1 from "./actions/workflows/cancel.ts";
import * as $$$$$$$$$$$2 from "./actions/workflows/signal.ts";
import { DecoManifest } from "$live/types.ts";
import * as $live_catchall from "$live/routes/[...catchall].tsx";

const manifest = {
  "loaders": {
    "$live/loaders/manifest.ts": $$$3,
    "$live/loaders/state.ts": $$$0,
    "$live/loaders/workflows/events.ts": $$$2,
    "$live/loaders/workflows/get.ts": $$$1,
  },
  "routes": {
    "./routes/_middleware.ts": $$$$0,
    "./routes/[...catchall].tsx": $$$$11,
    "./routes/index.tsx": $live_catchall,
    "./routes/live/_meta.ts": $$$$10,
    "./routes/live/editorData.ts": $$$$4,
    "./routes/live/inspect/[...block].ts": $$$$1,
    "./routes/live/invoke/[...key].ts": $$$$2,
    "./routes/live/invoke/index.ts": $$$$3,
    "./routes/live/previews/[...block].tsx": $$$$8,
    "./routes/live/previews/index.tsx": $$$$7,
    "./routes/live/release.ts": $$$$9,
    "./routes/live/workbench.ts": $$$$6,
    "./routes/live/workflows/run.ts": $$$$5,
  },
  "handlers": {
    "$live/handlers/devPage.ts": $$$$$$2,
    "$live/handlers/fresh.ts": $$$$$$4,
    "$live/handlers/proxy.ts": $$$$$$3,
    "$live/handlers/redirect.ts": $$$$$$5,
    "$live/handlers/router.ts": $$$$$$1,
    "$live/handlers/routesSelection.ts": $$$$$$0,
    "$live/handlers/workflowRunner.ts": $$$$$$6,
  },
  "pages": {
    "$live/pages/LivePage.tsx": $$$$$$$0,
  },
  "sections": {
    "$live/sections/Conditional_Beta.tsx": $$$$$$$$4,
    "$live/sections/EmptySection.tsx": $$$$$$$$2,
    "$live/sections/PageInclude.tsx": $$$$$$$$3,
    "$live/sections/Slot.tsx": $$$$$$$$1,
    "$live/sections/UseSlot.tsx": $$$$$$$$0,
  },
  "matchers": {
    "$live/matchers/MatchAlways.ts": $$$$$$$$$9,
    "$live/matchers/MatchCron.ts": $$$$$$$$$4,
    "$live/matchers/MatchDate.ts": $$$$$$$$$0,
    "$live/matchers/MatchDevice.ts": $$$$$$$$$7,
    "$live/matchers/MatchEnvironment.ts": $$$$$$$$$8,
    "$live/matchers/MatchHost.ts": $$$$$$$$$3,
    "$live/matchers/MatchLocation.ts": $$$$$$$$$10,
    "$live/matchers/MatchMulti.ts": $$$$$$$$$5,
    "$live/matchers/MatchRandom.ts": $$$$$$$$$6,
    "$live/matchers/MatchSite.ts": $$$$$$$$$2,
    "$live/matchers/MatchUserAgent.ts": $$$$$$$$$1,
  },
  "flags": {
    "$live/flags/audience.ts": $$$$$$$$$$0,
    "$live/flags/everyone.ts": $$$$$$$$$$2,
    "$live/flags/flag.ts": $$$$$$$$$$3,
    "$live/flags/multivariate.ts": $$$$$$$$$$1,
  },
  "actions": {
    "$live/actions/workflows/cancel.ts": $$$$$$$$$$$1,
    "$live/actions/workflows/signal.ts": $$$$$$$$$$$2,
    "$live/actions/workflows/start.ts": $$$$$$$$$$$0,
  },
  "islands": {},
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
