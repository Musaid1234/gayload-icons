import animation from "./data/2651-sticky-note.json";
import { Lordicon } from "./player.jsx";

export function StickyNote(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default StickyNote;
