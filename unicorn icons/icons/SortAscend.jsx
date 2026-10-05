import webmUrl from "../media/0260-sort-ascend.webm";
import svgUrl from "../media/0260-sort-ascend.svg";
import { UnicornIcon } from "../player.jsx";

export function SortAscend(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SortAscend;
