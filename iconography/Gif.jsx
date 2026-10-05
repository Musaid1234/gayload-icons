import animation from "./data/2494-gif.json";
import { Lordicon } from "./player.jsx";

export function Gif(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Gif;
