import webmUrl from "../media/0384-umbrella.webm";
import svgUrl from "../media/0384-umbrella.svg";
import { UnicornIcon } from "../player.jsx";

export function Umbrella(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Umbrella;
