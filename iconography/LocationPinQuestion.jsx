import animation from "./data/1552-location-pin-question.json";
import { Lordicon } from "./player.jsx";

export function LocationPinQuestion(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default LocationPinQuestion;
