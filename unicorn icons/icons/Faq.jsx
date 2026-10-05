import webmUrl from "../media/0225-faq.webm";
import svgUrl from "../media/0225-faq.svg";
import { UnicornIcon } from "../player.jsx";

export function Faq(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Faq;
