import webmUrl from "../media/0355-protractor-pencil.webm";
import svgUrl from "../media/0355-protractor-pencil.svg";
import { UnicornIcon } from "../player.jsx";

export function ProtractorPencil(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ProtractorPencil;
