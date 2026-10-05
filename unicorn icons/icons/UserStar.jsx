import webmUrl from "../media/0286-user-star.webm";
import svgUrl from "../media/0286-user-star.svg";
import { UnicornIcon } from "../player.jsx";

export function UserStar(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserStar;
