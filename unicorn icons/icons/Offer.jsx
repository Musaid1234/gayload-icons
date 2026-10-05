import webmUrl from "../media/0441-offer.webm";
import svgUrl from "../media/0441-offer.svg";
import { UnicornIcon } from "../player.jsx";

export function Offer(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Offer;
