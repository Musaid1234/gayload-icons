import webmUrl from "../media/0088-factory.webm";
import svgUrl from "../media/0088-factory.svg";
import { UnicornIcon } from "../player.jsx";

export function Factory(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Factory;
