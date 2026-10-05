import webmUrl from "../media/0346-loader-5.webm";
import svgUrl from "../media/0346-loader-5.svg";
import { UnicornIcon } from "../player.jsx";

export function Loader5(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Loader5;
