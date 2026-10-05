import webmUrl from "../media/0485-radiation.webm";
import svgUrl from "../media/0485-radiation.svg";
import { UnicornIcon } from "../player.jsx";

export function Radiation(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Radiation;
