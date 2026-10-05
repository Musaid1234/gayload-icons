import webmUrl from "../media/0191-cloud-upload.webm";
import svgUrl from "../media/0191-cloud-upload.svg";
import { UnicornIcon } from "../player.jsx";

export function CloudUpload(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CloudUpload;
