import webmUrl from "../media/0357-drone.webm";
import svgUrl from "../media/0357-drone.svg";
import { UnicornIcon } from "../player.jsx";

export function Drone(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Drone;
