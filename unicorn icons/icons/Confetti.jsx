import webmUrl from "../media/0417-confetti.webm";
import svgUrl from "../media/0417-confetti.svg";
import { UnicornIcon } from "../player.jsx";

export function Confetti(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Confetti;
