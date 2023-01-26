import { Head } from "$fresh/runtime.ts";
import DrumMachine from "../islands/DrumMachine.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Tests from "../components/Tests.tsx";

export default function DrumMachinePage() {
  return (
    <>
      <Head>
        <title>Drum Machine</title>
      </Head>

      <Sidebar active="/drum-machine" />
      <DrumMachine />

      <Tests />
    </>
  );
}
