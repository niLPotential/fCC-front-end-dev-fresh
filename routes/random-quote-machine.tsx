import { asset, Head } from "$fresh/runtime.ts";
import Tests from "../components/Tests.tsx";
import Quote from "../islands/Quote.tsx";

export default function RandomQuoteMachine() {
  return (
    <div>
      <Head>
        <title>Random Quote Machine</title>
        <link
          rel="stylesheet"
          href={asset("random-quote-machine.css")}
        />
      </Head>
      <Quote />
      <Tests />
    </div>
  );
}
