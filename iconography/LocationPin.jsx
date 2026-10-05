import animation from "./data/18-location-pin.json";
import { Lordicon } from "./player.jsx";

export function LocationPin(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default LocationPin;
