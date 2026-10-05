import webmUrl from "../media/0359-bathtub.webm";
import svgUrl from "../media/0359-bathtub.svg";
import { UnicornIcon } from "../player.jsx";

export function Bathtub(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bathtub;
