import animation from "./data/489-rocket.json";
import { Lordicon } from "./player.jsx";

export function Rocket(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Rocket;
