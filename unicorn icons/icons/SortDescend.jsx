import webmUrl from "../media/0261-sort-descend.webm";
import svgUrl from "../media/0261-sort-descend.svg";
import { UnicornIcon } from "../player.jsx";

export function SortDescend(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SortDescend;
