import animation from "./data/362-article.json";
import { Lordicon } from "./player.jsx";

export function Article(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Article;
