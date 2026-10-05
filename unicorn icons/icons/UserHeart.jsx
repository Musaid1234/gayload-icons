import webmUrl from "../media/0281-user-heart.webm";
import svgUrl from "../media/0281-user-heart.svg";
import { UnicornIcon } from "../player.jsx";

export function UserHeart(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserHeart;
