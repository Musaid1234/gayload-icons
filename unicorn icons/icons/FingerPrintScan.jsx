import webmUrl from "../media/0200-finger-print-scan.webm";
import svgUrl from "../media/0200-finger-print-scan.svg";
import { UnicornIcon } from "../player.jsx";

export function FingerPrintScan(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FingerPrintScan;
