import webmUrl from "../media/0389-rainy-night.webm";
import svgUrl from "../media/0389-rainy-night.svg";
import { UnicornIcon } from "../player.jsx";

export function RainyNight(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RainyNight;
