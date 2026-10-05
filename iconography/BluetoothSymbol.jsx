import animation from "./data/379-bluetooth-symbol.json";
import { Lordicon } from "./player.jsx";

export function BluetoothSymbol(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BluetoothSymbol;
