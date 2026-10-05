import webmUrl from "../media/0478-solar-energy.webm";
import svgUrl from "../media/0478-solar-energy.svg";
import { UnicornIcon } from "../player.jsx";

export function SolarEnergy(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SolarEnergy;
