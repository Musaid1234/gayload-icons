import webmUrl from "../media/0057-weighing-machine.webm";
import svgUrl from "../media/0057-weighing-machine.svg";
import { UnicornIcon } from "../player.jsx";

export function WeighingMachine(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default WeighingMachine;
