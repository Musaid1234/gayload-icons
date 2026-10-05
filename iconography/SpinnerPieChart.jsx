import animation from "./data/4030-spinner-pie-chart.json";
import { Lordicon } from "./player.jsx";

export function SpinnerPieChart(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerPieChart;
