import webmUrl from "../media/0201-filter.webm";
import svgUrl from "../media/0201-filter.svg";
import { UnicornIcon } from "../player.jsx";

export function Filter(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Filter;
