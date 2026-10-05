import animation from "./data/4239-video-camera.json";
import { Lordicon } from "./player.jsx";

export function VideoCamera(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default VideoCamera;
