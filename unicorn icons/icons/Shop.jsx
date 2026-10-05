import webmUrl from "../media/0445-shop.webm";
import svgUrl from "../media/0445-shop.svg";
import { UnicornIcon } from "../player.jsx";

export function Shop(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Shop;
