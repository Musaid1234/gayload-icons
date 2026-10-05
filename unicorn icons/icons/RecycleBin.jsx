import webmUrl from "../media/0471-recycle-bin.webm";
import svgUrl from "../media/0471-recycle-bin.svg";
import { UnicornIcon } from "../player.jsx";

export function RecycleBin(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RecycleBin;
