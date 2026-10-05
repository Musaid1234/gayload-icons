import animation from "./data/4017-spinner-horizontal-dashed-circle.json";
import { Lordicon } from "./player.jsx";

export function SpinnerHorizontalDashedCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerHorizontalDashedCircle;
