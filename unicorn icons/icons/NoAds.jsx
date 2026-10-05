import webmUrl from "../media/0375-no-ads.webm";
import svgUrl from "../media/0375-no-ads.svg";
import { UnicornIcon } from "../player.jsx";

export function NoAds(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default NoAds;
