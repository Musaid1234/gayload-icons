import webmUrl from "../media/0106-atom.webm";
import svgUrl from "../media/0106-atom.svg";
import { UnicornIcon } from "../player.jsx";

export function Atom(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Atom;
