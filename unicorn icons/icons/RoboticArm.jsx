import webmUrl from "../media/0336-robotic-arm.webm";
import svgUrl from "../media/0336-robotic-arm.svg";
import { UnicornIcon } from "../player.jsx";

export function RoboticArm(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RoboticArm;
