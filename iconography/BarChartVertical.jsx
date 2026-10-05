import animation from "./data/3089-bar-chart-vertical.json";
import { Lordicon } from "./player.jsx";

export function BarChartVertical(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BarChartVertical;
