import webmUrl from "../media/0303-gift-confetti.webm";
import svgUrl from "../media/0303-gift-confetti.svg";
import { UnicornIcon } from "../player.jsx";

export function GiftConfetti(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GiftConfetti;
