import webmUrl from "../media/0315-green-factory.webm";
import svgUrl from "../media/0315-green-factory.svg";
import { UnicornIcon } from "../player.jsx";

export function GreenFactory(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default GreenFactory;
