import animation from "./data/4101-three-dots-vertical.json";
import { Lordicon } from "./player.jsx";

export function ThreeDotsVertical(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ThreeDotsVertical;
