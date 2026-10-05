import webmUrl from "../media/0068-napkin-box.webm";
import svgUrl from "../media/0068-napkin-box.svg";
import { UnicornIcon } from "../player.jsx";

export function NapkinBox(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default NapkinBox;
