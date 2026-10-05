import webmUrl from "../media/0409-mail-file.webm";
import svgUrl from "../media/0409-mail-file.svg";
import { UnicornIcon } from "../player.jsx";

export function MailFile(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default MailFile;
