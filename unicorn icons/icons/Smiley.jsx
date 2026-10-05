import webmUrl from "../media/0126-smiley.webm";
import svgUrl from "../media/0126-smiley.svg";
import { UnicornIcon } from "../player.jsx";

export function Smiley(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Smiley;
