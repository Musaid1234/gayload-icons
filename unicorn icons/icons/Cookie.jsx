import webmUrl from "../media/0206-cookie.webm";
import svgUrl from "../media/0206-cookie.svg";
import { UnicornIcon } from "../player.jsx";

export function Cookie(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cookie;
