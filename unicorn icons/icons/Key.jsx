import webmUrl from "../media/0238-key.webm";
import svgUrl from "../media/0238-key.svg";
import { UnicornIcon } from "../player.jsx";

export function Key(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Key;
