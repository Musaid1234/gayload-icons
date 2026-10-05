import webmUrl from "../media/0484-tv.webm";
import svgUrl from "../media/0484-tv.svg";
import { UnicornIcon } from "../player.jsx";

export function Tv(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Tv;
