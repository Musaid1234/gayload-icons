import animation from "./data/372-figures.json";
import { Lordicon } from "./player.jsx";

export function Figures(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Figures;
