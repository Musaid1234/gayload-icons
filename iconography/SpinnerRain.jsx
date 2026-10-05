import animation from "./data/4039-spinner-rain.json";
import { Lordicon } from "./player.jsx";

export function SpinnerRain(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerRain;
