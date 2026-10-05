import animation from "./data/23-smartphone.json";
import { Lordicon } from "./player.jsx";

export function Smartphone(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Smartphone;
