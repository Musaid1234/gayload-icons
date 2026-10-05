import webmUrl from "../media/0387-heavy-rain.webm";
import svgUrl from "../media/0387-heavy-rain.svg";
import { UnicornIcon } from "../player.jsx";

export function HeavyRain(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default HeavyRain;
