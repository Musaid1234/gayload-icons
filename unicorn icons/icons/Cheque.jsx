import webmUrl from "../media/0076-cheque.webm";
import svgUrl from "../media/0076-cheque.svg";
import { UnicornIcon } from "../player.jsx";

export function Cheque(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Cheque;
