import webmUrl from "../media/0236-layout3.webm";
import svgUrl from "../media/0236-layout3.svg";
import { UnicornIcon } from "../player.jsx";

export function Layout3(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Layout3;
