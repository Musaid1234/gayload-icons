import webmUrl from "../media/0125-award.webm";
import svgUrl from "../media/0125-award.svg";
import { UnicornIcon } from "../player.jsx";

export function Award(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Award;
