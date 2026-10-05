import animation from "./data/4092-book.json";
import { Lordicon } from "./player.jsx";

export function Book(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default Book;
