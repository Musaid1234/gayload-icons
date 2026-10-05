import webmUrl from "../media/0381-shield-search.webm";
import svgUrl from "../media/0381-shield-search.svg";
import { UnicornIcon } from "../player.jsx";

export function ShieldSearch(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ShieldSearch;
