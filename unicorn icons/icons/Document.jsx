import webmUrl from "../media/0194-document.webm";
import svgUrl from "../media/0194-document.svg";
import { UnicornIcon } from "../player.jsx";

export function Document(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Document;
