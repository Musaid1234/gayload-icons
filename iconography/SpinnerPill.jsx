import animation from "./data/4041-spinner-pill.json";
import { Lordicon } from "./player.jsx";

export function SpinnerPill(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerPill;
