import webmUrl from "../media/0294-cloudy-day.webm";
import svgUrl from "../media/0294-cloudy-day.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudyDay(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudyDay;
