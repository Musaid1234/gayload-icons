import webmUrl from "../media/0122-magnet.webm";
import svgUrl from "../media/0122-magnet.svg";
import { UnicornIcon } from "../player.jsx";

export function Magnet(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Magnet;
