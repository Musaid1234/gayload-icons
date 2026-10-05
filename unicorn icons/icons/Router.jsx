import webmUrl from "../media/0054-router.webm";
import svgUrl from "../media/0054-router.svg";
import { UnicornIcon } from "../player.jsx";

export function Router(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Router;
