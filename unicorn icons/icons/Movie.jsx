import webmUrl from "../media/0479-movie.webm";
import svgUrl from "../media/0479-movie.svg";
import { UnicornIcon } from "../player.jsx";

export function Movie(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Movie;
