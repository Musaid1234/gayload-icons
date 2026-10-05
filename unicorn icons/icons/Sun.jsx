import webmUrl from "../media/0307-sun.webm";
import svgUrl from "../media/0307-sun.svg";
import { UnicornIcon } from "../player.jsx";

export function Sun(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Sun;
