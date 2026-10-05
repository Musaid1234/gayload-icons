import webmUrl from "../media/0282-user-delete.webm";
import svgUrl from "../media/0282-user-delete.svg";
import { UnicornIcon } from "../player.jsx";

export function UserDelete(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserDelete;
