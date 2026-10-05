import webmUrl from "../media/0081-biofuel.webm";
import svgUrl from "../media/0081-biofuel.svg";
import { UnicornIcon } from "../player.jsx";

export function Biofuel(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Biofuel;
