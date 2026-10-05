import webmUrl from "../media/0188-cloud-plus.webm";
import svgUrl from "../media/0188-cloud-plus.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudPlus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudPlus;
