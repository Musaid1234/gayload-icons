import animation from "./data/199-download.json";
import { Lordicon } from "./player.jsx";

export function Download(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Download;
