import animation from "./data/804-sun.json";
import { Lordicon } from "./player.jsx";

export function Sun(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Sun;
