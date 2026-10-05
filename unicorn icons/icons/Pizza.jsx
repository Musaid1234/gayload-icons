import webmUrl from "../media/0141-pizza.webm";
import svgUrl from "../media/0141-pizza.svg";
import { UnicornIcon } from "../player.jsx";

export function Pizza(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Pizza;
