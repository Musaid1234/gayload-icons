import webmUrl from "../media/0187-cloud-search.webm";
import svgUrl from "../media/0187-cloud-search.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudSearch(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudSearch;
