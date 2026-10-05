import webmUrl from "../media/0474-solar-panel.webm";
import svgUrl from "../media/0474-solar-panel.svg";
import { UnicornIcon } from "../player.jsx";

export function SolarPanel(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SolarPanel;
