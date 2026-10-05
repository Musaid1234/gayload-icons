import webmUrl from "../media/0109-audio-off2.webm";
import svgUrl from "../media/0109-audio-off2.svg";
import { UnicornIcon } from "../player.jsx";

export function AudioOff2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AudioOff2;
