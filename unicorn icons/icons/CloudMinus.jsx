import webmUrl from "../media/0367-cloud-minus.webm";
import svgUrl from "../media/0367-cloud-minus.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudMinus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudMinus;
