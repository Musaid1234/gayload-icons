import webmUrl from "../media/0358-hotel-3-star.webm";
import svgUrl from "../media/0358-hotel-3-star.svg";
import { UnicornIcon } from "../player.jsx";

export function Hotel3Star(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Hotel3Star;
