import webmUrl from "../media/0284-wind.webm";
import svgUrl from "../media/0284-wind.svg";
import { UnicornIcon } from "../player.jsx";

export function Wind(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Wind;
