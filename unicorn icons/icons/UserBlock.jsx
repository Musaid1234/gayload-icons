import webmUrl from "../media/0385-user-block.webm";
import svgUrl from "../media/0385-user-block.svg";
import { UnicornIcon } from "../player.jsx";

export function UserBlock(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserBlock;
