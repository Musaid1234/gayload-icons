import webmUrl from "../media/0265-setting-tools.webm";
import svgUrl from "../media/0265-setting-tools.svg";
import { UnicornIcon } from "../player.jsx";

export function SettingTools(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SettingTools;
