import webmUrl from "../media/0460-bulb.webm";
import svgUrl from "../media/0460-bulb.svg";
import { UnicornIcon } from "../player.jsx";

export function Bulb2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bulb2;
