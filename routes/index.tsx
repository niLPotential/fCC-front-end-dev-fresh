import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Front End Dev Projects</title>
      </Head>
      <Header active="/" />
      <div>
        <a href="/random-quote-machine">Random Quote Machine</a>
        <a href="/markdown-previewer">Markdown Previewer</a>
        <a href="/drum-machine">Drum Machine</a>
        <a href="/calculator">JavaScript Calculator</a>
        <a href="/clock">25 + 5 Clock</a>
      </div>
    </>
  );
}
