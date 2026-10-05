import webmUrl from "../media/0034-caret-left.webm";
import svgUrl from "../media/0034-caret-left.svg";
import { UnicornIcon } from "../player.jsx";

export function CaretLeft(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CaretLeft;
