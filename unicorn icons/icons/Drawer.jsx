import webmUrl from "../media/0216-drawer.webm";
import svgUrl from "../media/0216-drawer.svg";
import { UnicornIcon } from "../player.jsx";

export function Drawer(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Drawer;
