import webmUrl from "../media/0112-play.webm";
import svgUrl from "../media/0112-play.svg";
import { UnicornIcon } from "../player.jsx";

export function Play(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Play;
