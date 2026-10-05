import webmUrl from "../media/0129-trolley.webm";
import svgUrl from "../media/0129-trolley.svg";
import { UnicornIcon } from "../player.jsx";

export function Trolley(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Trolley;
