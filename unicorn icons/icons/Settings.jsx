import webmUrl from "../media/0378-settings.webm";
import svgUrl from "../media/0378-settings.svg";
import { UnicornIcon } from "../player.jsx";

export function Settings(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Settings;
