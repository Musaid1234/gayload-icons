import animation from "./data/479-laptop.json";
import { Lordicon } from "./player.jsx";

export function Laptop(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Laptop;
