import webmUrl from "../media/0208-crop.webm";
import svgUrl from "../media/0208-crop.svg";
import { UnicornIcon } from "../player.jsx";

export function Crop(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Crop;
