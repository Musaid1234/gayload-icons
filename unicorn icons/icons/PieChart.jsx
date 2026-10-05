import webmUrl from "../media/0405-pie-chart.webm";
import svgUrl from "../media/0405-pie-chart.svg";
import { UnicornIcon } from "../player.jsx";

export function PieChart(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PieChart;
