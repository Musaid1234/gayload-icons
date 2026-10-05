import webmUrl from "../media/0443-mobile-shopping.webm";
import svgUrl from "../media/0443-mobile-shopping.svg";
import { UnicornIcon } from "../player.jsx";

export function MobileShopping(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MobileShopping;
