import animation from "./data/2752-banknotes.json";
import { Lordicon } from "./player.jsx";

export function Banknotes(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Banknotes;
