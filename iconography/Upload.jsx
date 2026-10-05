import animation from "./data/200-upload.json";
import { Lordicon } from "./player.jsx";

export function Upload(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Upload;
