import webmUrl from "../media/0151-heart-beat.webm";
import svgUrl from "../media/0151-heart-beat.svg";
import { UnicornIcon } from "../player.jsx";

export function HeartBeat(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default HeartBeat;
