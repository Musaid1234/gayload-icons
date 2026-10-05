import animation from "./data/2513-data.json";
import { Lordicon } from "./player.jsx";

export function Data(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Data;
