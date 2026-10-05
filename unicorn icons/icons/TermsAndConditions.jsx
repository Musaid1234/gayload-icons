import webmUrl from "../media/0412-terms-and-conditions.webm";
import svgUrl from "../media/0412-terms-and-conditions.svg";
import { UnicornIcon } from "../player.jsx";

export function TermsAndConditions(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default TermsAndConditions;
