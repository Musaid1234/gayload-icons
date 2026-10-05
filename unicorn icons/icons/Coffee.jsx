import webmUrl from "../media/0481-coffee.webm";
import svgUrl from "../media/0481-coffee.svg";
import { UnicornIcon } from "../player.jsx";

export function Coffee(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Coffee;
