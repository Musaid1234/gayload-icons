import animation from "./data/2460-floppy-disk.json";
import { Lordicon } from "./player.jsx";

export function FloppyDisk(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FloppyDisk;
