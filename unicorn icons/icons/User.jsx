import webmUrl from "../media/0288-user.webm";
import svgUrl from "../media/0288-user.svg";
import { UnicornIcon } from "../player.jsx";

export function User(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default User;
