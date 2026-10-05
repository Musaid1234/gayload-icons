import webmUrl from "../media/0398-checkbox.webm";
import svgUrl from "../media/0398-checkbox.svg";
import { UnicornIcon } from "../player.jsx";

export function Checkbox(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Checkbox;
