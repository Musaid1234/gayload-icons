import webmUrl from "../media/0483-burger.webm";
import svgUrl from "../media/0483-burger.svg";
import { UnicornIcon } from "../player.jsx";

export function Burger(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Burger;
