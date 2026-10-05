import webmUrl from "../media/0117-test-a-plus.webm";
import svgUrl from "../media/0117-test-a-plus.svg";
import { UnicornIcon } from "../player.jsx";

export function TestAPlus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TestAPlus;
