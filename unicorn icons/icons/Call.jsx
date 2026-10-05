import webmUrl from "../media/0183-call.webm";
import svgUrl from "../media/0183-call.svg";
import { UnicornIcon } from "../player.jsx";

export function Call(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Call;
