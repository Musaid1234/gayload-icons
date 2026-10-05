import webmUrl from "../media/0473-nuclear-plant.webm";
import svgUrl from "../media/0473-nuclear-plant.svg";
import { UnicornIcon } from "../player.jsx";

export function NuclearPlant(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default NuclearPlant;
