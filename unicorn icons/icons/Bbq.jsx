import webmUrl from "../media/0316-bbq.webm";
import svgUrl from "../media/0316-bbq.svg";
import { UnicornIcon } from "../player.jsx";

export function Bbq(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bbq;
