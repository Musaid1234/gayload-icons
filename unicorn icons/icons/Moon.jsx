import webmUrl from "../media/0317-moon.webm";
import svgUrl from "../media/0317-moon.svg";
import { UnicornIcon } from "../player.jsx";

export function Moon(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Moon;
