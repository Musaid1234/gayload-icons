import webmUrl from "../media/0185-attachment.webm";
import svgUrl from "../media/0185-attachment.svg";
import { UnicornIcon } from "../player.jsx";

export function Attachment(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Attachment;
