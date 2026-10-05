import webmUrl from "../media/0390-user-secure.webm";
import svgUrl from "../media/0390-user-secure.svg";
import { UnicornIcon } from "../player.jsx";

export function UserSecure(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserSecure;
