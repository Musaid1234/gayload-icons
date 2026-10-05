import animation from "./data/1385-grid-carousel.json";
import { Lordicon } from "./player.jsx";

export function GridCarousel(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default GridCarousel;
