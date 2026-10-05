import animation from "./data/2-cloud-upload.json";
import { Lordicon } from "./player.jsx";

export function CloudUpload(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CloudUpload;
