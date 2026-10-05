import webmUrl from "../media/0073-gloves.webm";
import svgUrl from "../media/0073-gloves.svg";
import { UnicornIcon } from "../player.jsx";

export function Gloves(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Gloves;
