import webmUrl from "../media/0285-snowfall.webm";
import svgUrl from "../media/0285-snowfall.svg";
import { UnicornIcon } from "../player.jsx";

export function Snowfall(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Snowfall;
