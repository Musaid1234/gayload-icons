import webmUrl from "../media/0362-align-right.webm";
import svgUrl from "../media/0362-align-right.svg";
import { UnicornIcon } from "../player.jsx";

export function AlignRight(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default AlignRight;
