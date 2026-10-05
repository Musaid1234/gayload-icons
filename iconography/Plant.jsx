import animation from "./data/586-plant.json";
import { Lordicon } from "./player.jsx";

export function Plant(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Plant;
