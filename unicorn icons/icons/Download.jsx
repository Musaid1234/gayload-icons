import webmUrl from "../media/0393-download.webm";
import svgUrl from "../media/0393-download.svg";
import { UnicornIcon } from "../player.jsx";

export function Download(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Download;
