import webmUrl from "../media/0215-edit.webm";
import svgUrl from "../media/0215-edit.svg";
import { UnicornIcon } from "../player.jsx";

export function Edit(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Edit;
