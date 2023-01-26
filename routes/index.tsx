import { Head } from "$fresh/runtime.ts";
import Sidebar from "../components/Sidebar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Front End Dev Projects Twind</title>
      </Head>
      <Sidebar active="/" />
    </>
  );
}
