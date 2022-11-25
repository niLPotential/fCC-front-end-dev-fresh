// import { Head } from "$fresh/runtime.ts";
import Tests from "../components/Tests.tsx";

export default function DrumMachine() {
  return (
    <div>
      <head>Drum Machine</head>
      <div>
        <div id="drum-machine">
          <div id="display"></div>
          <button className="drum-pad" id="drum-pad-Q">
            Q<audio src="" className="clip" id="Q"></audio>
          </button>
          <button className="drum-pad" id="drum-pad-W">
            W<audio src="" className="clip" id="W"></audio>
          </button>
          <button className="drum-pad" id="drum-pad-E">
            E<audio src="" className="clip" id="E"></audio>
          </button>
          <button className="drum-pad" id="drum-pad-A">
            A<audio src="" className="clip" id="A"></audio>
          </button>
          <button className="drum-pad" id="drum-pad-S">
            S<audio src="" className="clip" id="S"></audio>
          </button>
          <button className="drum-pad" id="drum-pad-D">
            D<audio src="" className="clip" id="D"></audio>
          </button>
          <button className="drum-pad" id="drum-pad-Z">
            Z<audio src="" className="clip" id="Z"></audio>
          </button>
          <button className="drum-pad" id="drum-pad-X">
            X<audio src="" className="clip" id="X"></audio>
          </button>
          <button className="drum-pad" id="drum-pad-C">
            C<audio src="" className="clip" id="C"></audio>
          </button>
        </div>
      </div>
      <Tests />
    </div>
  );
}
