import webmUrl from "../media/0181-call-support.webm";
import svgUrl from "../media/0181-call-support.svg";
import { UnicornIcon } from "../player.jsx";

export function CallSupport(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CallSupport;
