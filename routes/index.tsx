import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Front End Dev Projects</title>
      </Head>
      <Header active="/" />
    </>
  );
}
