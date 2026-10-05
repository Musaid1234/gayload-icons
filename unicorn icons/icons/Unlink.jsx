import webmUrl from "../media/0273-unlink.webm";
import svgUrl from "../media/0273-unlink.svg";
import { UnicornIcon } from "../player.jsx";

export function Unlink(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Unlink;
