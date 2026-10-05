import webmUrl from "../media/0179-calculator-symbols.webm";
import svgUrl from "../media/0179-calculator-symbols.svg";
import { UnicornIcon } from "../player.jsx";

export function CalculatorSymbols(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CalculatorSymbols;
