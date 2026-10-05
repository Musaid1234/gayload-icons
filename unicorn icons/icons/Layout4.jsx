import webmUrl from "../media/0221-layout4.webm";
import svgUrl from "../media/0221-layout4.svg";
import { UnicornIcon } from "../player.jsx";

export function Layout4(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Layout4;
