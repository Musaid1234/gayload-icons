import animation from "./data/2319-hand-hello.json";
import { Lordicon } from "./player.jsx";

export function HandHello(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default HandHello;
