import animation from "./data/4213-record.json";
import { Lordicon } from "./player.jsx";

export function Record(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Record;
