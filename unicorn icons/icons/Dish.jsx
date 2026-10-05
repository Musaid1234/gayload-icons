import webmUrl from "../media/0165-dish.webm";
import svgUrl from "../media/0165-dish.svg";
import { UnicornIcon } from "../player.jsx";

export function Dish(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Dish;
