import webmUrl from "../media/0283-user-minus.webm";
import svgUrl from "../media/0283-user-minus.svg";
import { UnicornIcon } from "../player.jsx";

export function UserMinus(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserMinus;
