import webmUrl from "../media/0098-bill.webm";
import svgUrl from "../media/0098-bill.svg";
import { UnicornIcon } from "../player.jsx";

export function Bill(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Bill;
