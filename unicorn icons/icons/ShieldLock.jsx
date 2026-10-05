import webmUrl from "../media/0255-shield-lock.webm";
import svgUrl from "../media/0255-shield-lock.svg";
import { UnicornIcon } from "../player.jsx";

export function ShieldLock(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ShieldLock;
