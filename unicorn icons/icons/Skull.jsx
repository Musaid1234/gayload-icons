import webmUrl from "../media/0257-skull.webm";
import svgUrl from "../media/0257-skull.svg";
import { UnicornIcon } from "../player.jsx";

export function Skull(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Skull;
