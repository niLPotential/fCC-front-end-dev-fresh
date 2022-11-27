import { Head } from "$fresh/runtime.ts";
import Tests from "../components/Tests.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>25 + 5 Clock</title>
      </Head>
      <div>
        <div id="break-label">Break Length</div>
        <div id="session-label">Session Length</div>
        <button id="break-decrement">Break Decrement</button>
        <button id="session-decrement">Session Decrement</button>
        <button id="break-Increment">Break Increment</button>
        <button id="session-Increment">Session Increment</button>
      </div>
      <Tests />
    </>
  );
}
