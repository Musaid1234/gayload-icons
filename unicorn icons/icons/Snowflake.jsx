import webmUrl from "../media/0304-snowflake.webm";
import svgUrl from "../media/0304-snowflake.svg";
import { UnicornIcon } from "../player.jsx";

export function Snowflake(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Snowflake;
