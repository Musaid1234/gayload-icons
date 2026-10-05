import webmUrl from "../media/0318-24-hour-delivery.webm";
import svgUrl from "../media/0318-24-hour-delivery.svg";
import { UnicornIcon } from "../player.jsx";

export function Icon24HourDelivery(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Icon24HourDelivery;
