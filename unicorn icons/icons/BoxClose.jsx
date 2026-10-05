import webmUrl from "../media/0090-box-close.webm";
import svgUrl from "../media/0090-box-close.svg";
import { UnicornIcon } from "../player.jsx";

export function BoxClose(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BoxClose;
