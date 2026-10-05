import animation from "./data/4032-spinner-sun.json";
import { Lordicon } from "./player.jsx";

export function SpinnerSun(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerSun;
