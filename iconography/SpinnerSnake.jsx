import animation from "./data/4034-spinner-snake.json";
import { Lordicon } from "./player.jsx";

export function SpinnerSnake(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default SpinnerSnake;
