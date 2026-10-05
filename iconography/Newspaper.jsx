import animation from "./data/411-newspaper.json";
import { Lordicon } from "./player.jsx";

export function Newspaper(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Newspaper;
