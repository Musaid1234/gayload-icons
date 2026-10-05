import webmUrl from "../media/0403-image.webm";
import svgUrl from "../media/0403-image.svg";
import { UnicornIcon } from "../player.jsx";

export function Image(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Image;
