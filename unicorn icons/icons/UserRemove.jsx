import webmUrl from "../media/0287-user-remove.webm";
import svgUrl from "../media/0287-user-remove.svg";
import { UnicornIcon } from "../player.jsx";

export function UserRemove(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserRemove;
