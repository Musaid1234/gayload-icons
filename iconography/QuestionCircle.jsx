import animation from "./data/2501-question-circle.json";
import { Lordicon } from "./player.jsx";

export function QuestionCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default QuestionCircle;
