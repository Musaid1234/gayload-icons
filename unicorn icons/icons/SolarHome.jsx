import webmUrl from "../media/0340-solar-home.webm";
import svgUrl from "../media/0340-solar-home.svg";
import { UnicornIcon } from "../player.jsx";

export function SolarHome(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SolarHome;
