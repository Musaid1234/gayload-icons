import webmUrl from "../media/0391-cloud.webm";
import svgUrl from "../media/0391-cloud.svg";
import { UnicornIcon } from "../player.jsx";

export function Cloud(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cloud;
