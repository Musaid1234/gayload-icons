import webmUrl from "../media/0247-ruler.webm";
import svgUrl from "../media/0247-ruler.svg";
import { UnicornIcon } from "../player.jsx";

export function Ruler(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Ruler;
