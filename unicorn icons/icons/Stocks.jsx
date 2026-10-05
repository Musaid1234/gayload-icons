import webmUrl from "../media/0382-stocks.webm";
import svgUrl from "../media/0382-stocks.svg";
import { UnicornIcon } from "../player.jsx";

export function Stocks(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Stocks;
