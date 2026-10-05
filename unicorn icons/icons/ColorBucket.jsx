import webmUrl from "../media/0205-color-bucket.webm";
import svgUrl from "../media/0205-color-bucket.svg";
import { UnicornIcon } from "../player.jsx";

export function ColorBucket(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ColorBucket;
