import webmUrl from "../media/0356-triangle-ruler.webm";
import svgUrl from "../media/0356-triangle-ruler.svg";
import { UnicornIcon } from "../player.jsx";

export function TriangleRuler(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TriangleRuler;
