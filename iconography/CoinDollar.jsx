import animation from "./data/291-coin-dollar.json";
import { Lordicon } from "./player.jsx";

export function CoinDollar(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CoinDollar;
