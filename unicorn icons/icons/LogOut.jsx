import webmUrl from "../media/0228-log-out.webm";
import svgUrl from "../media/0228-log-out.svg";
import { UnicornIcon } from "../player.jsx";

export function LogOut(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default LogOut;
