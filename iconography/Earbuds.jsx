import animation from "./data/1055-earbuds.json";
import { Lordicon } from "./player.jsx";

export function Earbuds(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Earbuds;
