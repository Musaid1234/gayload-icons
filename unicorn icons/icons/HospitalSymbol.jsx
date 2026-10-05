import webmUrl from "../media/0067-hospital-symbol.webm";
import svgUrl from "../media/0067-hospital-symbol.svg";
import { UnicornIcon } from "../player.jsx";

export function HospitalSymbol(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default HospitalSymbol;
