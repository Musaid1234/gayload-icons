import webmUrl from "../media/0095-box-in-hand.webm";
import svgUrl from "../media/0095-box-in-hand.svg";
import { UnicornIcon } from "../player.jsx";

export function BoxInHand(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BoxInHand;
