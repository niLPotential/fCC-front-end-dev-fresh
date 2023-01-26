import * as marked from "https://cdnjs.cloudflare.com/ajax/libs/marked/4.2.3/lib/marked.esm.min.js";
import { sampleMarkdown } from "../static/markdown-sample.ts";

marked.setOptions({
  breaks: true,
});

export default function Markdown() {
  const handleTextInput = (e: Event) => {
    (document.getElementById("preview") as HTMLElement).innerHTML = marked
      .parse(
        (e.target as HTMLTextAreaElement).value,
      );
  };

  addEventListener("load", () => {
    const initialText =
      (document.getElementById("editor") as HTMLTextAreaElement).value;
    (document.getElementById("preview") as HTMLElement).innerHTML = marked
      .parse(initialText);
  });

  return (
    <div id="markdown-box">
      <textarea
        id="editor"
        type="text"
        onInput={handleTextInput}
      >
        {sampleMarkdown}
      </textarea>

      <div id="preview">
      </div>
    </div>
  );
}
