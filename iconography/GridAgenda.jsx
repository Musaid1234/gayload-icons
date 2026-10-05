import animation from "./data/3107-grid-agenda.json";
import { Lordicon } from "./player.jsx";

export function GridAgenda(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridAgenda;
