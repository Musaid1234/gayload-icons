import animation from "./data/40-cog-double.json";
import { Lordicon } from "./player.jsx";

export function CogDouble(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CogDouble;
