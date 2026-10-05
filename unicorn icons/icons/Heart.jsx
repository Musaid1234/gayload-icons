import webmUrl from "../media/0380-heart.webm";
import svgUrl from "../media/0380-heart.svg";
import { UnicornIcon } from "../player.jsx";

export function Heart(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Heart;
