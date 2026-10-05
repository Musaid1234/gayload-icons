import animation from "./data/4232-medal.json";
import { Lordicon } from "./player.jsx";

export function Medal(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Medal;
