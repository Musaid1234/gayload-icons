import webmUrl from "../media/0234-information.webm";
import svgUrl from "../media/0234-information.svg";
import { UnicornIcon } from "../player.jsx";

export function Information(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Information;
