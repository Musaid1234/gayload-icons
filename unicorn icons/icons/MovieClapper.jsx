import webmUrl from "../media/0348-movie-clapper.webm";
import svgUrl from "../media/0348-movie-clapper.svg";
import { UnicornIcon } from "../player.jsx";

export function MovieClapper(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MovieClapper;
