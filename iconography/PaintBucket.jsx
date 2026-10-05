import animation from "./data/1428-paint-bucket.json";
import { Lordicon } from "./player.jsx";

export function PaintBucket(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PaintBucket;
