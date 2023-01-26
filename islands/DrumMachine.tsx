import { useState } from "preact/hooks";

export default function DrumMachine() {
  const [display, setDisplay] = useState("Display");

  interface DrumPadProps {
    drumPadId: string;
    src: string;
    audioId: string;
  }

  function DrumPad(props: DrumPadProps) {
    return (
      <button
        id={props.drumPadId}
        onClick={(e) => {
          (document.getElementById(props.audioId) as HTMLAudioElement).play();
        }}
      >
        <audio
          src={props.src}
          id={props.audioId}
          onPlay={() => {
            setDisplay(props.drumPadId);
          }}
        >
        </audio>
        {props.audioId}
      </button>
    );
  }

  return (
    <div
      id="drum-machine"
      tabIndex={-1}
      onKeyDown={(e) => {
        (document.getElementById(e.key.toUpperCase()) as HTMLAudioElement)
          .play();
      }}
    >
      <DrumPad
        drumPadId="Heater-1"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        audioId="Q"
      />
      <DrumPad
        drumPadId="Heater-2"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        audioId="W"
      />
      <DrumPad
        drumPadId="Heater-3"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        audioId="E"
      />
      <DrumPad
        drumPadId="Heater-4"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        audioId="A"
      />
      <DrumPad
        drumPadId="Clap"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        audioId="S"
      />
      <DrumPad
        drumPadId="Open-HH"
        src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        audioId="D"
      />
      <DrumPad
        drumPadId="Kick-n'-Hat"
        src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        audioId="Z"
      />{" "}
      <DrumPad
        drumPadId="Kick"
        src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        audioId="X"
      />
      <DrumPad
        drumPadId="Closed-HH"
        src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        audioId="C"
      />
      <div id="display">{display}</div>
    </div>
  );
}
