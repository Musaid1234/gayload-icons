import webmUrl from "../media/0190-cloud-sync.webm";
import svgUrl from "../media/0190-cloud-sync.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudSync(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudSync;
