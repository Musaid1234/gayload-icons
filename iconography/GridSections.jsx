import animation from "./data/365-grid-sections.json";
import { Lordicon } from "./player.jsx";

export function GridSections(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridSections;
