import webmUrl from "../media/0012-cheveron-single-up.webm";
import svgUrl from "../media/0012-cheveron-single-up.svg";
import { UnicornIcon } from "../player.jsx";

export function CheveronSingleUp(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CheveronSingleUp;
