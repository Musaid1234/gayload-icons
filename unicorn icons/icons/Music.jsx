import webmUrl from "../media/0114-music.webm";
import svgUrl from "../media/0114-music.svg";
import { UnicornIcon } from "../player.jsx";

export function Music(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Music;
