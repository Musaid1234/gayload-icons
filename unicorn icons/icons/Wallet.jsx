import webmUrl from "../media/0093-wallet.webm";
import svgUrl from "../media/0093-wallet.svg";
import { UnicornIcon } from "../player.jsx";

export function Wallet(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Wallet;
