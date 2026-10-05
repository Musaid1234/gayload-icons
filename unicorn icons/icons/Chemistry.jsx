import webmUrl from "../media/0354-chemistry.webm";
import svgUrl from "../media/0354-chemistry.svg";
import { UnicornIcon } from "../player.jsx";

export function Chemistry(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Chemistry;
