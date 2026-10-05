import webmUrl from "../media/0453-buy-button.webm";
import svgUrl from "../media/0453-buy-button.svg";
import { UnicornIcon } from "../player.jsx";

export function BuyButton2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BuyButton2;
