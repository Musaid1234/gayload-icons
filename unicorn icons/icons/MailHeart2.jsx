import webmUrl from "../media/0418-mail-heart.webm";
import svgUrl from "../media/0418-mail-heart.svg";
import { UnicornIcon } from "../player.jsx";

export function MailHeart2(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MailHeart2;
