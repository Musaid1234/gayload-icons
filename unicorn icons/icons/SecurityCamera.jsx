import webmUrl from "../media/0052-security-camera.webm";
import svgUrl from "../media/0052-security-camera.svg";
import { UnicornIcon } from "../player.jsx";

export function SecurityCamera(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default SecurityCamera;
