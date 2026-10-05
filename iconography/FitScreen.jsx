import animation from "./data/2318-fit-screen.json";
import { Lordicon } from "./player.jsx";

export function FitScreen(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FitScreen;
