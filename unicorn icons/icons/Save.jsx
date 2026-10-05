import webmUrl from "../media/0246-save.webm";
import svgUrl from "../media/0246-save.svg";
import { UnicornIcon } from "../player.jsx";

export function Save(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Save;
