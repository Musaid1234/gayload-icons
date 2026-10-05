import animation from "./data/3088-bar-chart-vertical-decline.json";
import { Lordicon } from "./player.jsx";

export function BarChartVerticalDecline(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BarChartVerticalDecline;
