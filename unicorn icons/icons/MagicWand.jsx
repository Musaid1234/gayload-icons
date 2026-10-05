import webmUrl from "../media/0226-magic-wand.webm";
import svgUrl from "../media/0226-magic-wand.svg";
import { UnicornIcon } from "../player.jsx";

export function MagicWand(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MagicWand;
