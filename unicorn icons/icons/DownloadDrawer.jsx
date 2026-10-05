import webmUrl from "../media/0193-download-drawer.webm";
import svgUrl from "../media/0193-download-drawer.svg";
import { UnicornIcon } from "../player.jsx";

export function DownloadDrawer(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default DownloadDrawer;
