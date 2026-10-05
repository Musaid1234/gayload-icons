import webmUrl from "../media/0069-hospital.webm";
import svgUrl from "../media/0069-hospital.svg";
import { UnicornIcon } from "../player.jsx";

export function Hospital(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Hospital;
