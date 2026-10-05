import webmUrl from "../media/0053-network-monitor.webm";
import svgUrl from "../media/0053-network-monitor.svg";
import { UnicornIcon } from "../player.jsx";

export function NetworkMonitor(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default NetworkMonitor;
