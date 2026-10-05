import webmUrl from "../media/0433-bill.webm";
import svgUrl from "../media/0433-bill.svg";
import { UnicornIcon } from "../player.jsx";

export function Bill2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bill2;
