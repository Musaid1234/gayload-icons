import animation from "./data/4038-spinner-bold-circle.json";
import { Lordicon } from "./player.jsx";

export function SpinnerBoldCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerBoldCircle;
