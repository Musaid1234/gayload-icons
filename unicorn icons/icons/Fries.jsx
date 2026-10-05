import webmUrl from "../media/0132-fries.webm";
import svgUrl from "../media/0132-fries.svg";
import { UnicornIcon } from "../player.jsx";

export function Fries(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Fries;
