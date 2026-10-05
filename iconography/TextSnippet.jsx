import animation from "./data/385-text-snippet.json";
import { Lordicon } from "./player.jsx";

export function TextSnippet(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default TextSnippet;
