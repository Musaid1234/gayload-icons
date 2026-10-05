import webmUrl from "../media/0119-location-circle.webm";
import svgUrl from "../media/0119-location-circle.svg";
import { UnicornIcon } from "../player.jsx";

export function LocationCircle(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default LocationCircle;
