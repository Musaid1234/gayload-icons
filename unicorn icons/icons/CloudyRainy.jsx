import webmUrl from "../media/0297-cloudy-rainy.webm";
import svgUrl from "../media/0297-cloudy-rainy.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudyRainy(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudyRainy;
