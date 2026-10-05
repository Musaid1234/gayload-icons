import webmUrl from "../media/0214-design-tool.webm";
import svgUrl from "../media/0214-design-tool.svg";
import { UnicornIcon } from "../player.jsx";

export function DesignTool(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default DesignTool;
