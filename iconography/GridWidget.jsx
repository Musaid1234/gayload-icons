import animation from "./data/366-grid-widget.json";
import { Lordicon } from "./player.jsx";

export function GridWidget(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridWidget;
