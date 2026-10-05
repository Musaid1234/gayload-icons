import animation from "./data/70-paperclip.json";
import { Lordicon } from "./player.jsx";

export function Paperclip(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Paperclip;
