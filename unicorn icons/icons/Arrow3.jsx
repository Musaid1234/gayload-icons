import webmUrl from "../media/0416-arrow3.webm";
import svgUrl from "../media/0416-arrow3.svg";
import { UnicornIcon } from "../player.jsx";

export function Arrow3(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Arrow3;
