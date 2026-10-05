import webmUrl from "../media/0115-telescope.webm";
import svgUrl from "../media/0115-telescope.svg";
import { UnicornIcon } from "../player.jsx";

export function Telescope(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Telescope;
