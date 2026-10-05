import animation from "./data/1045-sound-waves.json";
import { Lordicon } from "./player.jsx";

export function SoundWaves(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SoundWaves;
