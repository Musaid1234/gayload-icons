import webmUrl from "../media/0096-bulb.webm";
import svgUrl from "../media/0096-bulb.svg";
import { UnicornIcon } from "../player.jsx";

export function Bulb(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bulb;
