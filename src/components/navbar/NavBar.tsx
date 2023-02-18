import AvatarLogin from "./AvatarLogin";
import LanguageButton from "components/buttons/langbuttonNoText";
import { masterTheme } from "util/theame";
import Cart from "./CartBadgeIcon";
import MainLogo from "./MainStoreLogo";
import { FlexEndWrapper, StickyNavBar, FlexInnerContainer } from "./style";

export default function PrimarySearchAppBar() {
  return (
    <StickyNavBar masterTheme={masterTheme}>
      <FlexInnerContainer>
        <MainLogo />
        <FlexEndWrapper>
          <LanguageButton />
        </FlexEndWrapper>
        <Cart />
        <AvatarLogin />
      </FlexInnerContainer>
    </StickyNavBar>
  );
}
