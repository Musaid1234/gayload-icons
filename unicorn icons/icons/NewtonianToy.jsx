import webmUrl from "../media/0321-newtonian-toy.webm";
import svgUrl from "../media/0321-newtonian-toy.svg";
import { UnicornIcon } from "../player.jsx";

export function NewtonianToy(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default NewtonianToy;
