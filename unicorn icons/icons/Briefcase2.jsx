import webmUrl from "../media/0410-briefcase.webm";
import svgUrl from "../media/0410-briefcase.svg";
import { UnicornIcon } from "../player.jsx";

export function Briefcase2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Briefcase2;
