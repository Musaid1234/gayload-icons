import webmUrl from "../media/0439-card-swipe.webm";
import svgUrl from "../media/0439-card-swipe.svg";
import { UnicornIcon } from "../player.jsx";

export function CardSwipe(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CardSwipe;
