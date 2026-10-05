import webmUrl from "../media/0341-movie-reel.webm";
import svgUrl from "../media/0341-movie-reel.svg";
import { UnicornIcon } from "../player.jsx";

export function MovieReel(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MovieReel;
