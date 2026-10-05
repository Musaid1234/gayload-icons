import webmUrl from "../media/0230-menu-vertical.webm";
import svgUrl from "../media/0230-menu-vertical.svg";
import { UnicornIcon } from "../player.jsx";

export function MenuVertical(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MenuVertical;
