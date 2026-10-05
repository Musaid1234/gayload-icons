import webmUrl from "../media/0323-circle-error.webm";
import svgUrl from "../media/0323-circle-error.svg";
import { UnicornIcon } from "../player.jsx";

export function CircleError(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CircleError;
