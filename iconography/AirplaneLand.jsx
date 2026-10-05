import animation from "./data/2493-airplane-land.json";
import { Lordicon } from "./player.jsx";

export function AirplaneLand(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default AirplaneLand;
