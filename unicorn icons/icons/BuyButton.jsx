import webmUrl from "../media/0146-buy-button.webm";
import svgUrl from "../media/0146-buy-button.svg";
import { UnicornIcon } from "../player.jsx";

export function BuyButton(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BuyButton;
