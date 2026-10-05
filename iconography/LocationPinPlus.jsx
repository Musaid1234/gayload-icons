import animation from "./data/1681-location-pin-plus.json";
import { Lordicon } from "./player.jsx";

export function LocationPinPlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default LocationPinPlus;
