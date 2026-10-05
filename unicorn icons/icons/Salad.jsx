import webmUrl from "../media/0134-salad.webm";
import svgUrl from "../media/0134-salad.svg";
import { UnicornIcon } from "../player.jsx";

export function Salad(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Salad;
