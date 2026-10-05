import webmUrl from "../media/0452-credit-card.webm";
import svgUrl from "../media/0452-credit-card.svg";
import { UnicornIcon } from "../player.jsx";

export function CreditCard2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CreditCard2;
