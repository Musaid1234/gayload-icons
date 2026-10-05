import animation from "./data/187-briefcase.json";
import { Lordicon } from "./player.jsx";

export function Briefcase(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Briefcase;
