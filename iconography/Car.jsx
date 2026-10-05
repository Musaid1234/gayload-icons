import animation from "./data/496-car.json";
import { Lordicon } from "./player.jsx";

export function Car(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Car;
