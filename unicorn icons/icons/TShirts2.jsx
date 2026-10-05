import webmUrl from "../media/0456-t-shirts.webm";
import svgUrl from "../media/0456-t-shirts.svg";
import { UnicornIcon } from "../player.jsx";

export function TShirts2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TShirts2;
