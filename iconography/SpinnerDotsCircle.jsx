import animation from "./data/4023-spinner-dots-circle.json";
import { Lordicon } from "./player.jsx";

export function SpinnerDotsCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerDotsCircle;
