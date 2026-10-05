import webmUrl from "../media/0008-refresh.webm";
import svgUrl from "../media/0008-refresh.svg";
import { UnicornIcon } from "../player.jsx";

export function Refresh(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Refresh;
