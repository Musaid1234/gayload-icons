import animation from "./data/424-chat-question.json";
import { Lordicon } from "./player.jsx";

export function ChatQuestion(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ChatQuestion;
