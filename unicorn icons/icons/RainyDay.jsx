import webmUrl from "../media/0302-rainy-day.webm";
import svgUrl from "../media/0302-rainy-day.svg";
import { UnicornIcon } from "../player.jsx";

export function RainyDay(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default RainyDay;
