import animation from "./data/439-flask.json";
import { Lordicon } from "./player.jsx";

export function Flask(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Flask;
