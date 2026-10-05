import webmUrl from "../media/0371-folder-front.webm";
import svgUrl from "../media/0371-folder-front.svg";
import { UnicornIcon } from "../player.jsx";

export function FolderFront(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FolderFront;
