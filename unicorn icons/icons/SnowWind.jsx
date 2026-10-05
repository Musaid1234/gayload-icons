import webmUrl from "../media/0408-snow-wind.webm";
import svgUrl from "../media/0408-snow-wind.svg";
import { UnicornIcon } from "../player.jsx";

export function SnowWind(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SnowWind;
