import { asset, Head } from "$fresh/runtime.ts";
import Markdown from "../islands/Markdown.tsx";
import Tests from "../components/Tests.tsx";

export default function MarkdownPreviewer() {
  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
        <link rel="stylesheet" href={asset("markdown-previewer.css")} />
      </Head>
      <Markdown />
      <Tests />
    </>
  );
}
