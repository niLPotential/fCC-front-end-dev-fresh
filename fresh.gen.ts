// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/calculator.tsx";
import * as $1 from "./routes/clock.tsx";
import * as $2 from "./routes/drum-machine.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/markdown-previewer.tsx";
import * as $5 from "./routes/random-quote-machine/index.tsx";
import * as $$0 from "./islands/Quote.tsx";

const manifest = {
  routes: {
    "./routes/calculator.tsx": $0,
    "./routes/clock.tsx": $1,
    "./routes/drum-machine.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/markdown-previewer.tsx": $4,
    "./routes/random-quote-machine/index.tsx": $5,
  },
  islands: {
    "./islands/Quote.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
