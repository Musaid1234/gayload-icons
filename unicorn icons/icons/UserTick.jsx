import webmUrl from "../media/0289-user-tick.webm";
import svgUrl from "../media/0289-user-tick.svg";
import { UnicornIcon } from "../player.jsx";

export function UserTick(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserTick;
