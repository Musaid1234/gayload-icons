import animation from "./data/145-mail.json";
import { Lordicon } from "./player.jsx";

export function Mail(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Mail;
