import webmUrl from "../media/0219-hamburger-menu.webm";
import svgUrl from "../media/0219-hamburger-menu.svg";
import { UnicornIcon } from "../player.jsx";

export function HamburgerMenu(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default HamburgerMenu;
