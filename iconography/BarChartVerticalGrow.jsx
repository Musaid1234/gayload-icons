import animation from "./data/153-bar-chart-vertical-grow.json";
import { Lordicon } from "./player.jsx";

export function BarChartVerticalGrow(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BarChartVerticalGrow;
