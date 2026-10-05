import webmUrl from "../media/0058-wheel-chair.webm";
import svgUrl from "../media/0058-wheel-chair.svg";
import { UnicornIcon } from "../player.jsx";

export function WheelChair(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default WheelChair;
