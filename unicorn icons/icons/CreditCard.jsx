import webmUrl from "../media/0150-credit-card.webm";
import svgUrl from "../media/0150-credit-card.svg";
import { UnicornIcon } from "../player.jsx";

export function CreditCard(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CreditCard;
