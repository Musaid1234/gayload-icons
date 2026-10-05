import webmUrl from "../media/0186-cloud-download.webm";
import svgUrl from "../media/0186-cloud-download.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudDownload(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudDownload;
