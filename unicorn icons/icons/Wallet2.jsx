import webmUrl from "../media/0462-wallet.webm";
import svgUrl from "../media/0462-wallet.svg";
import { UnicornIcon } from "../player.jsx";

export function Wallet2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Wallet2;
