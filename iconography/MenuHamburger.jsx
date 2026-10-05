import animation from "./data/4172-menu-hamburger.json";
import { Lordicon } from "./player.jsx";

export function MenuHamburger(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default MenuHamburger;
