import webmUrl from "../media/0064-microscope.webm";
import svgUrl from "../media/0064-microscope.svg";
import { UnicornIcon } from "../player.jsx";

export function Microscope(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Microscope;
