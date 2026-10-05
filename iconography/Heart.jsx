import animation from "./data/20-heart.json";
import { Lordicon } from "./player.jsx";

export function Heart(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Heart;
