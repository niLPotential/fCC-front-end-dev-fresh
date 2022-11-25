import { Head } from "$fresh/runtime.ts";
import Tests from "../../components/Tests.tsx";
import Quote from "../../islands/Quote.tsx";

export default function RandomQuoteMachine() {
  return (
    <div>
      <Head>
        <title>Random Quote Machine</title>
      </Head>
      <Quote />
      <Tests />
    </div>
  );
}
