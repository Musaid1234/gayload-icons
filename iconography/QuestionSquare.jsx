import animation from "./data/371-question-square.json";
import { Lordicon } from "./player.jsx";

export function QuestionSquare(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default QuestionSquare;
