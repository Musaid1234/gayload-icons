import animation from "./data/4188-film.json";
import { Lordicon } from "./player.jsx";

export function Film(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Film;
