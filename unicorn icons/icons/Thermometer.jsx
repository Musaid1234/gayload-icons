import webmUrl from "../media/0306-thermometer.webm";
import svgUrl from "../media/0306-thermometer.svg";
import { UnicornIcon } from "../player.jsx";

export function Thermometer(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Thermometer;
