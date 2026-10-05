import webmUrl from "../media/0327-select-area.webm";
import svgUrl from "../media/0327-select-area.svg";
import { UnicornIcon } from "../player.jsx";

export function SelectArea(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SelectArea;
