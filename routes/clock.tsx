import { Head } from "$fresh/runtime.ts";
import Pomodoro from "../islands/Pomodoro.tsx";
import Header from "../components/Header.tsx";
import Tests from "../components/Tests.tsx";

export default function () {
  return (
    <>
      <Head>
        <title>25 + 5 Clock</title>
      </Head>

      <Header active="/clock" />
      <Pomodoro />

      <Tests />
    </>
  );
}
