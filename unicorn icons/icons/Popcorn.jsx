import webmUrl from "../media/0135-popcorn.webm";
import svgUrl from "../media/0135-popcorn.svg";
import { UnicornIcon } from "../player.jsx";

export function Popcorn(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Popcorn;
