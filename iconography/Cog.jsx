import animation from "./data/39-cog.json";
import { Lordicon } from "./player.jsx";

export function Cog(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Cog;
