import webmUrl from "../media/0275-upload.webm";
import svgUrl from "../media/0275-upload.svg";
import { UnicornIcon } from "../player.jsx";

export function Upload(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Upload;
