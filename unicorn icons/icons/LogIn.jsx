import webmUrl from "../media/0227-log-in.webm";
import svgUrl from "../media/0227-log-in.svg";
import { UnicornIcon } from "../player.jsx";

export function LogIn(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default LogIn;
