import webmUrl from "../media/0066-pill-and-tablets.webm";
import svgUrl from "../media/0066-pill-and-tablets.svg";
import { UnicornIcon } from "../player.jsx";

export function PillAndTablets(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PillAndTablets;
