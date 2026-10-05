import animation from "./data/403-bank.json";
import { Lordicon } from "./player.jsx";

export function Bank(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Bank;
