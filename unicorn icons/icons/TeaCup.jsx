import webmUrl from "../media/0345-tea-cup.webm";
import svgUrl from "../media/0345-tea-cup.svg";
import { UnicornIcon } from "../player.jsx";

export function TeaCup(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TeaCup;
