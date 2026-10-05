import webmUrl from "../media/0476-oil-mining.webm";
import svgUrl from "../media/0476-oil-mining.svg";
import { UnicornIcon } from "../player.jsx";

export function OilMining(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default OilMining;
