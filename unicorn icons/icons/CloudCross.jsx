import webmUrl from "../media/0365-cloud-cross.webm";
import svgUrl from "../media/0365-cloud-cross.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudCross(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudCross;
