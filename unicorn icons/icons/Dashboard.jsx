import webmUrl from "../media/0399-dashboard.webm";
import svgUrl from "../media/0399-dashboard.svg";
import { UnicornIcon } from "../player.jsx";

export function Dashboard(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Dashboard;
