import animation from "./data/158-pie-chart.json";
import { Lordicon } from "./player.jsx";

export function PieChart(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PieChart;
