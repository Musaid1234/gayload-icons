import webmUrl from "../media/0374-menu.webm";
import svgUrl from "../media/0374-menu.svg";
import { UnicornIcon } from "../player.jsx";

export function Menu(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Menu;
