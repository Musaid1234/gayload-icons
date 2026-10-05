import webmUrl from "../media/0298-cloudy.webm";
import svgUrl from "../media/0298-cloudy.svg";
import { UnicornIcon } from "../player.jsx";

export function Cloudy(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cloudy;
