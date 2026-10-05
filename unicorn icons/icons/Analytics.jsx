import webmUrl from "../media/0395-analytics.webm";
import svgUrl from "../media/0395-analytics.svg";
import { UnicornIcon } from "../player.jsx";

export function Analytics(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Analytics;
