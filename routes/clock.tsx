import { Head } from "$fresh/runtime.ts";
import Pomodoro from "../islands/Pomodoro.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Tests from "../components/Tests.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>25 + 5 Clock</title>
      </Head>

      <Sidebar active="/clock" />
      <Pomodoro />

      <Tests />
    </>
  );
}
