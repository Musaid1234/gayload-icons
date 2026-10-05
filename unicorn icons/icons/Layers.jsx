import webmUrl from "../media/0235-layers.webm";
import svgUrl from "../media/0235-layers.svg";
import { UnicornIcon } from "../player.jsx";

export function Layers(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Layers;
