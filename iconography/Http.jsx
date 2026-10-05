import animation from "./data/2526-http.json";
import { Lordicon } from "./player.jsx";

export function Http(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Http;
