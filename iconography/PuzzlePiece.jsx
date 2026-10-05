import animation from "./data/3150-puzzle-piece.json";
import { Lordicon } from "./player.jsx";

export function PuzzlePiece(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PuzzlePiece;
