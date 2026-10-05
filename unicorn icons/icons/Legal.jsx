import webmUrl from "../media/0411-legal.webm";
import svgUrl from "../media/0411-legal.svg";
import { UnicornIcon } from "../player.jsx";

export function Legal(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Legal;
