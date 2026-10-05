import webmUrl from "../media/0386-user-search.webm";
import svgUrl from "../media/0386-user-search.svg";
import { UnicornIcon } from "../player.jsx";

export function UserSearch(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default UserSearch;
