import webmUrl from "../media/0406-search.webm";
import svgUrl from "../media/0406-search.svg";
import { UnicornIcon } from "../player.jsx";

export function Search(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Search;
