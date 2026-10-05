import animation from "./data/453-piggy-bank.json";
import { Lordicon } from "./player.jsx";

export function PiggyBank(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PiggyBank;
