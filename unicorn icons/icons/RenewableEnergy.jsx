import webmUrl from "../media/0472-renewable-energy.webm";
import svgUrl from "../media/0472-renewable-energy.svg";
import { UnicornIcon } from "../player.jsx";

export function RenewableEnergy(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RenewableEnergy;
