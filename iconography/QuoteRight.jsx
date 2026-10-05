import animation from "./data/41-quote-right.json";
import { Lordicon } from "./player.jsx";

export function QuoteRight(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default QuoteRight;
