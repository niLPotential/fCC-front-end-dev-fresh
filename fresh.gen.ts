// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/calculator.tsx";
import * as $1 from "./routes/clock.tsx";
import * as $2 from "./routes/drum-machine.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/markdown-previewer.tsx";
import * as $5 from "./routes/random-quote-machine.tsx";
import * as $$0 from "./islands/Calculator.tsx";
import * as $$1 from "./islands/DrumMachine.tsx";
import * as $$2 from "./islands/Markdown.tsx";
import * as $$3 from "./islands/Pomodoro.tsx";
import * as $$4 from "./islands/Quote.tsx";

const manifest = {
  routes: {
    "./routes/calculator.tsx": $0,
    "./routes/clock.tsx": $1,
    "./routes/drum-machine.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/markdown-previewer.tsx": $4,
    "./routes/random-quote-machine.tsx": $5,
  },
  islands: {
    "./islands/Calculator.tsx": $$0,
    "./islands/DrumMachine.tsx": $$1,
    "./islands/Markdown.tsx": $$2,
    "./islands/Pomodoro.tsx": $$3,
    "./islands/Quote.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
