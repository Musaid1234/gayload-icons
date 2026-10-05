import webmUrl from "../media/0324-archive2.webm";
import svgUrl from "../media/0324-archive2.svg";
import { UnicornIcon } from "../player.jsx";

export function Archive2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Archive2;
