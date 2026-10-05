import animation from "./data/1348-location-pin-user.json";
import { Lordicon } from "./player.jsx";

export function LocationPinUser(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default LocationPinUser;
