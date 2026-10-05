import animation from "./data/1386-grid-headline.json";
import { Lordicon } from "./player.jsx";

export function GridHeadline(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridHeadline;
