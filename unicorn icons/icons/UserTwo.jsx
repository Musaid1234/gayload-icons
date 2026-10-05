import webmUrl from "../media/0292-user-two.webm";
import svgUrl from "../media/0292-user-two.svg";
import { UnicornIcon } from "../player.jsx";

export function UserTwo(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserTwo;
