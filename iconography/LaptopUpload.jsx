import animation from "./data/3120-laptop-upload.json";
import { Lordicon } from "./player.jsx";

export function LaptopUpload(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default LaptopUpload;
