import animation from "./data/1335-qr-code.json";
import { Lordicon } from "./player.jsx";

export function QrCode(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default QrCode;
