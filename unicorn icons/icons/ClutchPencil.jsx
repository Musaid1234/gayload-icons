import webmUrl from "../media/0368-clutch-pencil.webm";
import svgUrl from "../media/0368-clutch-pencil.svg";
import { UnicornIcon } from "../player.jsx";

export function ClutchPencil(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ClutchPencil;
