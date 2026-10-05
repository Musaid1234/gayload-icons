import animation from "./data/1258-medical-mask.json";
import { Lordicon } from "./player.jsx";

export function MedicalMask(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MedicalMask;
