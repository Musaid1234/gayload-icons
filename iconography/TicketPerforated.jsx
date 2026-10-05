import animation from "./data/759-ticket-perforated.json";
import { Lordicon } from "./player.jsx";

export function TicketPerforated(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default TicketPerforated;
