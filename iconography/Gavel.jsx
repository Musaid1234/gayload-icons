import animation from "./data/119-gavel.json";
import { Lordicon } from "./player.jsx";

export function Gavel(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Gavel;
