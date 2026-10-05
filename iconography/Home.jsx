import animation from "./data/63-home.json";
import { Lordicon } from "./player.jsx";

export function Home(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Home;
