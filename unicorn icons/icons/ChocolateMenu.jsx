import webmUrl from "../media/0366-chocolate-menu.webm";
import svgUrl from "../media/0366-chocolate-menu.svg";
import { UnicornIcon } from "../player.jsx";

export function ChocolateMenu(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ChocolateMenu;
