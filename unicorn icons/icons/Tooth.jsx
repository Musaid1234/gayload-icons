import webmUrl from "../media/0059-tooth.webm";
import svgUrl from "../media/0059-tooth.svg";
import { UnicornIcon } from "../player.jsx";

export function Tooth(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Tooth;
