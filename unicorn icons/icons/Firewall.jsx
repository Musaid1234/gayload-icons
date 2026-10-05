import webmUrl from "../media/0055-firewall.webm";
import svgUrl from "../media/0055-firewall.svg";
import { UnicornIcon } from "../player.jsx";

export function Firewall(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Firewall;
