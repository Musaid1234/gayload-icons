import webmUrl from "../media/0333-card-payment.webm";
import svgUrl from "../media/0333-card-payment.svg";
import { UnicornIcon } from "../player.jsx";

export function CardPayment(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CardPayment;
