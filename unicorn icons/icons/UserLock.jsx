import webmUrl from "../media/0330-user-lock.webm";
import svgUrl from "../media/0330-user-lock.svg";
import { UnicornIcon } from "../player.jsx";

export function UserLock(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserLock;
