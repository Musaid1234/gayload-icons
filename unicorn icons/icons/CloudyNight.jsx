import webmUrl from "../media/0295-cloudy-night.webm";
import svgUrl from "../media/0295-cloudy-night.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudyNight(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudyNight;
