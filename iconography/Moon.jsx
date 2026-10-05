import animation from "./data/4183-moon.json";
import { Lordicon } from "./player.jsx";

export function Moon(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Moon;
