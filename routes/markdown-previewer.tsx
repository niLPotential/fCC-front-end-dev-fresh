// import { Head } from "$fresh/runtime.ts";
import Tests from "../components/Tests.tsx";

export default function MarkdownPreviewer() {
  return (
    <div>
      <head>Markdown Previewer</head>
      <div>
        <textarea id="editor"></textarea>
        <div id="preview"></div>
      </div>
      <Tests />
    </div>
  );
}
