import animation from "./data/3973-clipboard-bar-chart.json";
import { Lordicon } from "./player.jsx";

export function ClipboardBarChart(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ClipboardBarChart;
