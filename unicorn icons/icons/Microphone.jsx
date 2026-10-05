import webmUrl from "../media/0404-microphone.webm";
import svgUrl from "../media/0404-microphone.svg";
import { UnicornIcon } from "../player.jsx";

export function Microphone(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Microphone;
