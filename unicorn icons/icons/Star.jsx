import webmUrl from "../media/0252-star.webm";
import svgUrl from "../media/0252-star.svg";
import { UnicornIcon } from "../player.jsx";

export function Star(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Star;
