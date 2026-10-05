import animation from "./data/1980-star-of-david.json";
import { Lordicon } from "./player.jsx";

export function StarOfDavid(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default StarOfDavid;
