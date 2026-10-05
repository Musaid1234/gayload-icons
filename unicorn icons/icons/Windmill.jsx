import webmUrl from "../media/0477-windmill.webm";
import svgUrl from "../media/0477-windmill.svg";
import { UnicornIcon } from "../player.jsx";

export function Windmill(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Windmill;
