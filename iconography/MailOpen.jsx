import animation from "./data/4095-mail-open.json";
import { Lordicon } from "./player.jsx";

export function MailOpen(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MailOpen;
