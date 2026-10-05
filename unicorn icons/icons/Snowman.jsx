import webmUrl from "../media/0305-snowman.webm";
import svgUrl from "../media/0305-snowman.svg";
import { UnicornIcon } from "../player.jsx";

export function Snowman(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Snowman;
