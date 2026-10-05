import animation from "./data/4428-hand-dollar.json";
import { Lordicon } from "./player.jsx";

export function HandDollar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HandDollar;
