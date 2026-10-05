import webmUrl from "../media/0271-transform-scale.webm";
import svgUrl from "../media/0271-transform-scale.svg";
import { UnicornIcon } from "../player.jsx";

export function TransformScale(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TransformScale;
