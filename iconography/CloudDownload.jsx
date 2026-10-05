import animation from "./data/3-cloud-download.json";
import { Lordicon } from "./player.jsx";

export function CloudDownload(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default CloudDownload;
