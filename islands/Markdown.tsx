import { useState } from "preact/hooks";
import * as marked from "https://cdnjs.cloudflare.com/ajax/libs/marked/4.2.3/lib/marked.esm.min.js";
import { sampleMarkdown } from "../static/markdown-sample.ts";

export default function Markdown() {
  const [text, setText] = useState("");

  const handleTextInput = (e: Event) => {
    setText((e.target as HTMLTextAreaElement).value);
  };

  return (
    <div id="markdown-box">
      <textarea
        id="editor"
        onInput={handleTextInput}
      >
        {sampleMarkdown}
      </textarea>

      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(text),
        }}
      >
        {text}
      </div>
    </div>
  );
}
