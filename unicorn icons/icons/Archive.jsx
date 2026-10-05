import webmUrl from "../media/0169-archive.webm";
import svgUrl from "../media/0169-archive.svg";
import { UnicornIcon } from "../player.jsx";

export function Archive(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Archive;
