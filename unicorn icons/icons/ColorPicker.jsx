import webmUrl from "../media/0207-color-picker.webm";
import svgUrl from "../media/0207-color-picker.svg";
import { UnicornIcon } from "../player.jsx";

export function ColorPicker(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ColorPicker;
