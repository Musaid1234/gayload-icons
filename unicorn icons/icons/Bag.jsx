import webmUrl from "../media/0124-bag.webm";
import svgUrl from "../media/0124-bag.svg";
import { UnicornIcon } from "../player.jsx";

export function Bag(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bag;
