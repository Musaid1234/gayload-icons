import webmUrl from "../media/0133-t-shirts.webm";
import svgUrl from "../media/0133-t-shirts.svg";
import { UnicornIcon } from "../player.jsx";

export function TShirts(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TShirts;
