import webmUrl from "../media/0279-torch.webm";
import svgUrl from "../media/0279-torch.svg";
import { UnicornIcon } from "../player.jsx";

export function Torch(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Torch;
