import animation from "./data/27-globe.json";
import { Lordicon } from "./player.jsx";

export function Globe(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Globe;
