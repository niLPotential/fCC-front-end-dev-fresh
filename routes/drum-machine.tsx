import { asset, Head } from "$fresh/runtime.ts";
import DrumMachine from "../islands/DrumMachine.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Tests from "../components/Tests.tsx";

export default function DrumMachinePage() {
  return (
    <>
      <Head>
        <title>Drum Machine</title>
        <link rel="stylesheet" href={asset("drum-machine.css")} />
      </Head>

      <Sidebar active="/drum-machine" />
      <DrumMachine />

      <Tests />
    </>
  );
}
