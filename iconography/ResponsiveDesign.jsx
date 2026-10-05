import animation from "./data/1329-responsive-design.json";
import { Lordicon } from "./player.jsx";

export function ResponsiveDesign(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ResponsiveDesign;
