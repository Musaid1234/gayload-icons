import animation from "./data/4073-email.json";
import { Lordicon } from "./player.jsx";

export function Email(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Email;
