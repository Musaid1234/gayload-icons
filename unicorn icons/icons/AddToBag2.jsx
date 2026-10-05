import webmUrl from "../media/0429-add-to-bag.webm";
import svgUrl from "../media/0429-add-to-bag.svg";
import { UnicornIcon } from "../player.jsx";

export function AddToBag2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AddToBag2;
