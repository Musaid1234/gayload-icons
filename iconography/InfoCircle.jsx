import animation from "./data/367-info-circle.json";
import { Lordicon } from "./player.jsx";

export function InfoCircle(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default InfoCircle;
