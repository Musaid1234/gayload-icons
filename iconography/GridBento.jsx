import animation from "./data/1388-grid-bento.json";
import { Lordicon } from "./player.jsx";

export function GridBento(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridBento;
