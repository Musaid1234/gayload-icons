import webmUrl from "../media/0079-warehouse.webm";
import svgUrl from "../media/0079-warehouse.svg";
import { UnicornIcon } from "../player.jsx";

export function Warehouse(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Warehouse;
