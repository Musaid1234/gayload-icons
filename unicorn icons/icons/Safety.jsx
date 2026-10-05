import webmUrl from "../media/0251-safety.webm";
import svgUrl from "../media/0251-safety.svg";
import { UnicornIcon } from "../player.jsx";

export function Safety(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Safety;
