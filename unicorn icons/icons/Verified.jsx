import webmUrl from "../media/0290-verified.webm";
import svgUrl from "../media/0290-verified.svg";
import { UnicornIcon } from "../player.jsx";

export function Verified(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Verified;
