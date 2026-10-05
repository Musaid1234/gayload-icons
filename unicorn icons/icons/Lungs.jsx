import webmUrl from "../media/0062-lungs.webm";
import svgUrl from "../media/0062-lungs.svg";
import { UnicornIcon } from "../player.jsx";

export function Lungs(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Lungs;
