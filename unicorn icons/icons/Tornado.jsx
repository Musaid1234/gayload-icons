import webmUrl from "../media/0392-tornado.webm";
import svgUrl from "../media/0392-tornado.svg";
import { UnicornIcon } from "../player.jsx";

export function Tornado(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Tornado;
