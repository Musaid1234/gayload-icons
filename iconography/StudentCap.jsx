import animation from "./data/406-student-cap.json";
import { Lordicon } from "./player.jsx";

export function StudentCap(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default StudentCap;
