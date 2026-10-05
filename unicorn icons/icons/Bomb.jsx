import webmUrl from "../media/0176-bomb.webm";
import svgUrl from "../media/0176-bomb.svg";
import { UnicornIcon } from "../player.jsx";

export function Bomb(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bomb;
