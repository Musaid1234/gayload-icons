import webmUrl from "../media/0319-loader-3.webm";
import svgUrl from "../media/0319-loader-3.svg";
import { UnicornIcon } from "../player.jsx";

export function Loader3(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Loader3;
