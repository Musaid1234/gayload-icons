import webmUrl from "../media/0446-hand-coin.webm";
import svgUrl from "../media/0446-hand-coin.svg";
import { UnicornIcon } from "../player.jsx";

export function HandCoin(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default HandCoin;
