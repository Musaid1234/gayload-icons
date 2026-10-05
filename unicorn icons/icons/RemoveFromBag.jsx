import webmUrl from "../media/0335-remove-from-bag.webm";
import svgUrl from "../media/0335-remove-from-bag.svg";
import { UnicornIcon } from "../player.jsx";

export function RemoveFromBag(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RemoveFromBag;
