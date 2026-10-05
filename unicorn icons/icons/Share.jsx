import webmUrl from "../media/0407-share.webm";
import svgUrl from "../media/0407-share.svg";
import { UnicornIcon } from "../player.jsx";

export function Share(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Share;
