import webmUrl from "../media/0245-qr-code.webm";
import svgUrl from "../media/0245-qr-code.svg";
import { UnicornIcon } from "../player.jsx";

export function QrCode(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default QrCode;
