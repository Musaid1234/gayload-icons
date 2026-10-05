import webmUrl from "../media/0140-briefcase.webm";
import svgUrl from "../media/0140-briefcase.svg";
import { UnicornIcon } from "../player.jsx";

export function Briefcase(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Briefcase;
