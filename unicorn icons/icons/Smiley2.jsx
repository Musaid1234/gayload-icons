import webmUrl from "../media/0458-smiley.webm";
import svgUrl from "../media/0458-smiley.svg";
import { UnicornIcon } from "../player.jsx";

export function Smiley2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Smiley2;
