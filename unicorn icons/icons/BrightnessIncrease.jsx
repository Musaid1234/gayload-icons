import webmUrl from "../media/0178-brightness-increase.webm";
import svgUrl from "../media/0178-brightness-increase.svg";
import { UnicornIcon } from "../player.jsx";

export function BrightnessIncrease(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BrightnessIncrease;
