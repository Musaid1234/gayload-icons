import webmUrl from "../media/0313-green-energy.webm";
import svgUrl from "../media/0313-green-energy.svg";
import { UnicornIcon } from "../player.jsx";

export function GreenEnergy(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GreenEnergy;
