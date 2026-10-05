import animation from "./data/481-store.json";
import { Lordicon } from "./player.jsx";

export function Store(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Store;
