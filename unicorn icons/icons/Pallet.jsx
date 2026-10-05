import webmUrl from "../media/0161-pallet.webm";
import svgUrl from "../media/0161-pallet.svg";
import { UnicornIcon } from "../player.jsx";

export function Pallet(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Pallet;
