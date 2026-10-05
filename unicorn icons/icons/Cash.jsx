import webmUrl from "../media/0075-cash.webm";
import svgUrl from "../media/0075-cash.svg";
import { UnicornIcon } from "../player.jsx";

export function Cash(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cash;
