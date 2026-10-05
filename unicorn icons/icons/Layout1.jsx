import webmUrl from "../media/0373-layout1.webm";
import svgUrl from "../media/0373-layout1.svg";
import { UnicornIcon } from "../player.jsx";

export function Layout1(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Layout1;
