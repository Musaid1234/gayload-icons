import animation from "./data/1912-location-pin-check.json";
import { Lordicon } from "./player.jsx";

export function LocationPinCheck(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default LocationPinCheck;
