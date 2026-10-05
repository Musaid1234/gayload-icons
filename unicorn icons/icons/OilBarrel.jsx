import webmUrl from "../media/0314-oil-barrel.webm";
import svgUrl from "../media/0314-oil-barrel.svg";
import { UnicornIcon } from "../player.jsx";

export function OilBarrel(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default OilBarrel;
