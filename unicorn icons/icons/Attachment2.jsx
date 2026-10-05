import webmUrl from "../media/0172-attachment2.webm";
import svgUrl from "../media/0172-attachment2.svg";
import { UnicornIcon } from "../player.jsx";

export function Attachment2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Attachment2;
