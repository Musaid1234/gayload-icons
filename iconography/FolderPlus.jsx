import animation from "./data/338-folder-plus.json";
import { Lordicon } from "./player.jsx";

export function FolderPlus(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FolderPlus;
