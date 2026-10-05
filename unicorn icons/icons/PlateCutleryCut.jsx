import webmUrl from "../media/0322-plate-cutlery-cut.webm";
import svgUrl from "../media/0322-plate-cutlery-cut.svg";
import { UnicornIcon } from "../player.jsx";

export function PlateCutleryCut(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PlateCutleryCut;
