import webmUrl from "../media/0272-upload-drawer.webm";
import svgUrl from "../media/0272-upload-drawer.svg";
import { UnicornIcon } from "../player.jsx";

export function UploadDrawer(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UploadDrawer;
