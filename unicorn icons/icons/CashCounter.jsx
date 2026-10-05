import webmUrl from "../media/0440-cash-counter.webm";
import svgUrl from "../media/0440-cash-counter.svg";
import { UnicornIcon } from "../player.jsx";

export function CashCounter(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CashCounter;
