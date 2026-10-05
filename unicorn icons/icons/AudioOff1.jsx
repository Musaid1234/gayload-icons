import webmUrl from "../media/0351-audio-off1.webm";
import svgUrl from "../media/0351-audio-off1.svg";
import { UnicornIcon } from "../player.jsx";

export function AudioOff1(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AudioOff1;
