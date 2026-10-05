import webmUrl from "../media/0262-sort.webm";
import svgUrl from "../media/0262-sort.svg";
import { UnicornIcon } from "../player.jsx";

export function Sort(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Sort;
