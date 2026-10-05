import animation from "./data/54-image-mountain.json";
import { Lordicon } from "./player.jsx";

export function ImageMountain(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ImageMountain;
