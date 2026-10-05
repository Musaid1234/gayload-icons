import webmUrl from "../media/0168-washing-machine.webm";
import svgUrl from "../media/0168-washing-machine.svg";
import { UnicornIcon } from "../player.jsx";

export function WashingMachine(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default WashingMachine;
