import webmUrl from "../media/0110-affiliate.webm";
import svgUrl from "../media/0110-affiliate.svg";
import { UnicornIcon } from "../player.jsx";

export function Affiliate(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Affiliate;
