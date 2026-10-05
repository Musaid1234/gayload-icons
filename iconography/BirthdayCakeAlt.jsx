import animation from "./data/4098-birthday-cake-alt.json";
import { Lordicon } from "./player.jsx";

export function BirthdayCakeAlt(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default BirthdayCakeAlt;
