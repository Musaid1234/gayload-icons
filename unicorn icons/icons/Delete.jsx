import webmUrl from "../media/0212-delete.webm";
import svgUrl from "../media/0212-delete.svg";
import { UnicornIcon } from "../player.jsx";

export function Delete(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Delete;
