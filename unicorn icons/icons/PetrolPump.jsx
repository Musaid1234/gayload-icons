import webmUrl from "../media/0078-petrol-pump.webm";
import svgUrl from "../media/0078-petrol-pump.svg";
import { UnicornIcon } from "../player.jsx";

export function PetrolPump(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PetrolPump;
