import webmUrl from "../media/0010-redo.webm";
import svgUrl from "../media/0010-redo.svg";
import { UnicornIcon } from "../player.jsx";

export function Redo(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Redo;
