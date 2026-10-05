import webmUrl from "../media/0070-hand-wash.webm";
import svgUrl from "../media/0070-hand-wash.svg";
import { UnicornIcon } from "../player.jsx";

export function HandWash(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default HandWash;
