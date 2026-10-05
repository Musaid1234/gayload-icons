import webmUrl from "../media/0001-undo.webm";
import svgUrl from "../media/0001-undo.svg";
import { UnicornIcon } from "../player.jsx";

export function Undo(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Undo;
