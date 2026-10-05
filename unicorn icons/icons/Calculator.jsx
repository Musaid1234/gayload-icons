import webmUrl from "../media/0353-calculator.webm";
import svgUrl from "../media/0353-calculator.svg";
import { UnicornIcon } from "../player.jsx";

export function Calculator(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Calculator;
