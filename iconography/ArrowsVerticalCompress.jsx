import animation from "./data/376-arrows-vertical-compress.json";
import { Lordicon } from "./player.jsx";

export function ArrowsVerticalCompress(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ArrowsVerticalCompress;
