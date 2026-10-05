import webmUrl from "../media/0118-test.webm";
import svgUrl from "../media/0118-test.svg";
import { UnicornIcon } from "../player.jsx";

export function Test(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Test;
