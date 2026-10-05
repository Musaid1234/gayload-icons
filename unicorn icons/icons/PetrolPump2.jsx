import webmUrl from "../media/0470-petrol-pump.webm";
import svgUrl from "../media/0470-petrol-pump.svg";
import { UnicornIcon } from "../player.jsx";

export function PetrolPump2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default PetrolPump2;
