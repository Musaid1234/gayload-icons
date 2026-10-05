import webmUrl from "../media/0264-setting-slider.webm";
import svgUrl from "../media/0264-setting-slider.svg";
import { UnicornIcon } from "../player.jsx";

export function SettingSlider(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SettingSlider;
