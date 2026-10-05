import webmUrl from "../media/0363-brightness-decrease.webm";
import svgUrl from "../media/0363-brightness-decrease.svg";
import { UnicornIcon } from "../player.jsx";

export function BrightnessDecrease(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BrightnessDecrease;
