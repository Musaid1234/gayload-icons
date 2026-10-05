import animation from "./data/384-input-pin.json";
import { Lordicon } from "./player.jsx";

export function InputPin(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default InputPin;
