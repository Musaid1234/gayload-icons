import webmUrl from "../media/0352-biology.webm";
import svgUrl from "../media/0352-biology.svg";
import { UnicornIcon } from "../player.jsx";

export function Biology(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Biology;
