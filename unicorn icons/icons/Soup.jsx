import webmUrl from "../media/0156-soup.webm";
import svgUrl from "../media/0156-soup.svg";
import { UnicornIcon } from "../player.jsx";

export function Soup(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Soup;
