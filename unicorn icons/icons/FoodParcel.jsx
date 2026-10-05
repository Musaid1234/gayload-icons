import webmUrl from "../media/0160-food-parcel.webm";
import svgUrl from "../media/0160-food-parcel.svg";
import { UnicornIcon } from "../player.jsx";

export function FoodParcel(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default FoodParcel;
