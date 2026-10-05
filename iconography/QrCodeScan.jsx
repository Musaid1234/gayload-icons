import animation from "./data/383-qr-code-scan.json";
import { Lordicon } from "./player.jsx";

export function QrCodeScan(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default QrCodeScan;
