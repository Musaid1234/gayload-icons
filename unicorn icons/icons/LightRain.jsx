import webmUrl from "../media/0388-light-rain.webm";
import svgUrl from "../media/0388-light-rain.svg";
import { UnicornIcon } from "../player.jsx";

export function LightRain(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default LightRain;
