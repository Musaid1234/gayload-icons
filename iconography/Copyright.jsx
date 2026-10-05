import animation from "./data/990-copyright.json";
import { Lordicon } from "./player.jsx";

export function Copyright(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Copyright;
