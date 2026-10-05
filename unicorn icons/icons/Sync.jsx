import webmUrl from "../media/0005-sync.webm";
import svgUrl from "../media/0005-sync.svg";
import { UnicornIcon } from "../player.jsx";

export function Sync(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Sync;
