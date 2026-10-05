import animation from "./data/4351-hand-heart.json";
import { Lordicon } from "./player.jsx";

export function HandHeart(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HandHeart;
