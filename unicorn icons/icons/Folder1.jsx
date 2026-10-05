import webmUrl from "../media/0198-folder1.webm";
import svgUrl from "../media/0198-folder1.svg";
import { UnicornIcon } from "../player.jsx";

export function Folder1(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Folder1;
