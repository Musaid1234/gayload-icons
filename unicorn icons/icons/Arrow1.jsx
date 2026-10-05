import webmUrl from "../media/0309-arrow1.webm";
import svgUrl from "../media/0309-arrow1.svg";
import { UnicornIcon } from "../player.jsx";

export function Arrow1(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Arrow1;
