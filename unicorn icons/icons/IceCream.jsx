import webmUrl from "../media/0157-ice-cream.webm";
import svgUrl from "../media/0157-ice-cream.svg";
import { UnicornIcon } from "../player.jsx";

export function IceCream(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default IceCream;
