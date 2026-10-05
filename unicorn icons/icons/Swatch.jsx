import webmUrl from "../media/0278-swatch.webm";
import svgUrl from "../media/0278-swatch.svg";
import { UnicornIcon } from "../player.jsx";

export function Swatch(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Swatch;
