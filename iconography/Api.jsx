import animation from "./data/1327-api.json";
import { Lordicon } from "./player.jsx";

export function Api(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Api;
