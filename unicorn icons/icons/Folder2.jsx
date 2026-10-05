import webmUrl from "../media/0401-folder2.webm";
import svgUrl from "../media/0401-folder2.svg";
import { UnicornIcon } from "../player.jsx";

export function Folder2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Folder2;
