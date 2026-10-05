import animation from "./data/4357-music-note.json";
import { Lordicon } from "./player.jsx";

export function MusicNote(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MusicNote;
