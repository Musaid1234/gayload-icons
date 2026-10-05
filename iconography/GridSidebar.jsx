import animation from "./data/3109-grid-sidebar.json";
import { Lordicon } from "./player.jsx";

export function GridSidebar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridSidebar;
