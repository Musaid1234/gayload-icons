import webmUrl from "../media/0223-layout2.webm";
import svgUrl from "../media/0223-layout2.svg";
import { UnicornIcon } from "../player.jsx";

export function Layout2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Layout2;
