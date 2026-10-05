import webmUrl from "../media/0071-band-aid.webm";
import svgUrl from "../media/0071-band-aid.svg";
import { UnicornIcon } from "../player.jsx";

export function BandAid(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default BandAid;
