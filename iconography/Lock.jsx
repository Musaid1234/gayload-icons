import animation from "./data/94-lock.json";
import { Lordicon } from "./player.jsx";

export function Lock(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Lock;
