import webmUrl from "../media/0128-pot.webm";
import svgUrl from "../media/0128-pot.svg";
import { UnicornIcon } from "../player.jsx";

export function Pot(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Pot;
