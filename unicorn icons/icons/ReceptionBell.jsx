import webmUrl from "../media/0170-reception-bell.webm";
import svgUrl from "../media/0170-reception-bell.svg";
import { UnicornIcon } from "../player.jsx";

export function ReceptionBell(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ReceptionBell;
