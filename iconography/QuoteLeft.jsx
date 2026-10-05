import animation from "./data/15-quote-left.json";
import { Lordicon } from "./player.jsx";

export function QuoteLeft(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default QuoteLeft;
