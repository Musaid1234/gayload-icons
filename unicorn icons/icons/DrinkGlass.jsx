import webmUrl from "../media/0342-drink-glass.webm";
import svgUrl from "../media/0342-drink-glass.svg";
import { UnicornIcon } from "../player.jsx";

export function DrinkGlass(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default DrinkGlass;
