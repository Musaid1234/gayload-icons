import webmUrl from "../media/0035-caret-down.webm";
import svgUrl from "../media/0035-caret-down.svg";
import { UnicornIcon } from "../player.jsx";

export function CaretDown(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CaretDown;
