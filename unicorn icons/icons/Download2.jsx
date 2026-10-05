import webmUrl from "../media/0217-download2.webm";
import svgUrl from "../media/0217-download2.svg";
import { UnicornIcon } from "../player.jsx";

export function Download2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Download2;
