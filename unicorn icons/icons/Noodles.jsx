import webmUrl from "../media/0142-noodles.webm";
import svgUrl from "../media/0142-noodles.svg";
import { UnicornIcon } from "../player.jsx";

export function Noodles(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Noodles;
