import webmUrl from "../media/0203-community.webm";
import svgUrl from "../media/0203-community.svg";
import { UnicornIcon } from "../player.jsx";

export function Community(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Community;
