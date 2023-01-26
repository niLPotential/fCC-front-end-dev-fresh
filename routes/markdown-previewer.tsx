import { Head } from "$fresh/runtime.ts";
import Markdown from "../islands/Markdown.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Tests from "../components/Tests.tsx";

export default function MarkdownPreviewer() {
  return (
    <>
      <Head>
        <title>Markdown Previewer</title>
      </Head>

      <Sidebar active="/markdown-previewer" />
      <Markdown />
      <Tests />
    </>
  );
}
