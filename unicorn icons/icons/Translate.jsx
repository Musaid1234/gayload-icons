import webmUrl from "../media/0274-translate.webm";
import svgUrl from "../media/0274-translate.svg";
import { UnicornIcon } from "../player.jsx";

export function Translate(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Translate;
