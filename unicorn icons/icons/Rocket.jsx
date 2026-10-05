import webmUrl from "../media/0113-rocket.webm";
import svgUrl from "../media/0113-rocket.svg";
import { UnicornIcon } from "../player.jsx";

export function Rocket(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Rocket;
