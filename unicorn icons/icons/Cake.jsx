import webmUrl from "../media/0144-cake.webm";
import svgUrl from "../media/0144-cake.svg";
import { UnicornIcon } from "../player.jsx";

export function Cake(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cake;
