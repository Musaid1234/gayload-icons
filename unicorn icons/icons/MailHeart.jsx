import webmUrl from "../media/0155-mail-heart.webm";
import svgUrl from "../media/0155-mail-heart.svg";
import { UnicornIcon } from "../player.jsx";

export function MailHeart(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MailHeart;
