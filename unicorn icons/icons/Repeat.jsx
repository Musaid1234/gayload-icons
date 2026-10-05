import webmUrl from "../media/0009-repeat.webm";
import svgUrl from "../media/0009-repeat.svg";
import { UnicornIcon } from "../player.jsx";

export function Repeat(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Repeat;
