import animation from "./data/120-folder.json";
import { Lordicon } from "./player.jsx";

export function Folder(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Folder;
