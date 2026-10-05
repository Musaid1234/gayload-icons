import animation from "./data/1387-grid-columns.json";
import { Lordicon } from "./player.jsx";

export function GridColumns(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridColumns;
