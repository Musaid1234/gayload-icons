import animation from "./data/448-pet-print.json";
import { Lordicon } from "./player.jsx";

export function PetPrint(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default PetPrint;
