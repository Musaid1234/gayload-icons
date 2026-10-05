import webmUrl from "../media/0402-globe.webm";
import svgUrl from "../media/0402-globe.svg";
import { UnicornIcon } from "../player.jsx";

export function Globe(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Globe;
