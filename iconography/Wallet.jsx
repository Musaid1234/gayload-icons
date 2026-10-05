import animation from "./data/421-wallet.json";
import { Lordicon } from "./player.jsx";

export function Wallet(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Wallet;
