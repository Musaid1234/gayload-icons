import webmUrl from "../media/0060-test-tubes.webm";
import svgUrl from "../media/0060-test-tubes.svg";
import { UnicornIcon } from "../player.jsx";

export function TestTubes(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TestTubes;
