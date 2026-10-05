import webmUrl from "../media/0457-trolley.webm";
import svgUrl from "../media/0457-trolley.svg";
import { UnicornIcon } from "../player.jsx";

export function Trolley2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Trolley2;
