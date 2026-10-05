import animation from "./data/61-camera.json";
import { Lordicon } from "./player.jsx";

export function Camera(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Camera;
