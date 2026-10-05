import webmUrl from "../media/0347-loader-4.webm";
import svgUrl from "../media/0347-loader-4.svg";
import { UnicornIcon } from "../player.jsx";

export function Loader4(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Loader4;
