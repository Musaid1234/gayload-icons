import webmUrl from "../media/0459-cfl-bulb.webm";
import svgUrl from "../media/0459-cfl-bulb.svg";
import { UnicornIcon } from "../player.jsx";

export function CflBulb2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default CflBulb2;
