import animation from "./data/3090-mail-open-document.json";
import { Lordicon } from "./player.jsx";

export function MailOpenDocument(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MailOpenDocument;
