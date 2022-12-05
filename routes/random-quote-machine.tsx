import { asset, Head } from "$fresh/runtime.ts";
import Tests from "../components/Tests.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Quote from "../islands/Quote.tsx";

export default function RandomQuoteMachine() {
  return (
    <>
      <Head>
        <title>Random Quote Machine</title>
        <link
          rel="stylesheet"
          href={asset("random-quote-machine.css")}
        />
      </Head>

      <Sidebar active="/random-quote-machine" />
      <Quote />
      <Tests />
    </>
  );
}
