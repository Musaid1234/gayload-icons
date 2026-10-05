import webmUrl from "../media/0280-user-add.webm";
import svgUrl from "../media/0280-user-add.svg";
import { UnicornIcon } from "../player.jsx";

export function UserAdd(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserAdd;
