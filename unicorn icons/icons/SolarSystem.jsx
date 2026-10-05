import webmUrl from "../media/0116-solar-system.webm";
import svgUrl from "../media/0116-solar-system.svg";
import { UnicornIcon } from "../player.jsx";

export function SolarSystem(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SolarSystem;
