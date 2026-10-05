import webmUrl from "../media/0263-support-request.webm";
import svgUrl from "../media/0263-support-request.svg";
import { UnicornIcon } from "../player.jsx";

export function SupportRequest(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SupportRequest;
