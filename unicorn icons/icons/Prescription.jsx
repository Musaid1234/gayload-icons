import webmUrl from "../media/0065-prescription.webm";
import svgUrl from "../media/0065-prescription.svg";
import { UnicornIcon } from "../player.jsx";

export function Prescription(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Prescription;
