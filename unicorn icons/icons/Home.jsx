import webmUrl from "../media/0232-home.webm";
import svgUrl from "../media/0232-home.svg";
import { UnicornIcon } from "../player.jsx";

export function Home(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default Home;
