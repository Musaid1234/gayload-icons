import animation from "./data/92-file-upload.json";
import { Lordicon } from "./player.jsx";

export function FileUpload(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default FileUpload;
