import webmUrl from "../media/0021-cheveron-single-down.webm";
import svgUrl from "../media/0021-cheveron-single-down.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronSingleDown(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronSingleDown;
