import webmUrl from "../media/0077-money-bag.webm";
import svgUrl from "../media/0077-money-bag.svg";
import { UnicornIcon } from "../player.jsx";

export function MoneyBag(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MoneyBag;
