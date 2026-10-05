import webmUrl from "../media/0325-loader-2.webm";
import svgUrl from "../media/0325-loader-2.svg";
import { UnicornIcon } from "../player.jsx";

export function Loader2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Loader2;
