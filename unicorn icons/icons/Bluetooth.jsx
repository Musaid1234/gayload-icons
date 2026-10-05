import webmUrl from "../media/0175-bluetooth.webm";
import svgUrl from "../media/0175-bluetooth.svg";
import { UnicornIcon } from "../player.jsx";

export function Bluetooth(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bluetooth;
