import animation from "./data/2512-ai-chip.json";
import { Lordicon } from "./player.jsx";

export function AiChip(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default AiChip;
