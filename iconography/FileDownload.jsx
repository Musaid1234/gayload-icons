import animation from "./data/93-file-download.json";
import { Lordicon } from "./player.jsx";

export function FileDownload(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FileDownload;
