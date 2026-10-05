import webmUrl from "../media/0343-meat.webm";
import svgUrl from "../media/0343-meat.svg";
import { UnicornIcon } from "../player.jsx";

export function Meat(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Meat;
