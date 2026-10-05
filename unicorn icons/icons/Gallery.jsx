import webmUrl from "../media/0248-gallery.webm";
import svgUrl from "../media/0248-gallery.svg";
import { UnicornIcon } from "../player.jsx";

export function Gallery(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Gallery;
