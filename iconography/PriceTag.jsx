import animation from "./data/99-price-tag.json";
import { Lordicon } from "./player.jsx";

export function PriceTag(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PriceTag;
