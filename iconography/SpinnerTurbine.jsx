import animation from "./data/4035-spinner-turbine.json";
import { Lordicon } from "./player.jsx";

export function SpinnerTurbine(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerTurbine;
