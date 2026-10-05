import webmUrl from "../media/0364-pencil.webm";
import svgUrl from "../media/0364-pencil.svg";
import { UnicornIcon } from "../player.jsx";

export function Pencil(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Pencil;
