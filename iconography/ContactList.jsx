import animation from "./data/3115-contact-list.json";
import { Lordicon } from "./player.jsx";

export function ContactList(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ContactList;
