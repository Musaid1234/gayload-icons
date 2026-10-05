import webmUrl from "../media/0148-loader-1.webm";
import svgUrl from "../media/0148-loader-1.svg";
import { UnicornIcon } from "../player.jsx";

export function Loader1(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Loader1;
