import webmUrl from "../media/0033-caret-up.webm";
import svgUrl from "../media/0033-caret-up.svg";
import { UnicornIcon } from "../player.jsx";

export function CaretUp(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CaretUp;
