import webmUrl from "../media/0239-minus.webm";
import svgUrl from "../media/0239-minus.svg";
import { UnicornIcon } from "../player.jsx";

export function Minus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Minus;
