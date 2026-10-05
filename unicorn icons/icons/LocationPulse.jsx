import webmUrl from "../media/0120-location-pulse.webm";
import svgUrl from "../media/0120-location-pulse.svg";
import { UnicornIcon } from "../player.jsx";

export function LocationPulse(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default LocationPulse;
