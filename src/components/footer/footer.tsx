import { styled } from "@mui/material/styles";
import { Grid, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const RootContainer = styled(Grid)({
  backgroundColor: "#232f3e",
  color: "#fff",
  padding: "32px 16px",
});

const Logo = styled("img")({
  height: 36,
  marginBottom: 16,
});

const LinksContainer = styled(Grid)({
  marginBottom: 16,
});

const FooterLink = styled(Link)({
  color: "#fff",
  margin: "0 16px",
  textDecoration: "none",
  fontSize: 14,
  display: "flex",
  gap: "5px",
  alignItems: "center",
  "&:hover": {
    textDecoration: "underline",
  },
});

const IconContainer = styled("span")({
  display: "inline-flex",
  alignItems: "center",
  marginRight: 8,
});

const Disclaimer = styled(Typography)({
  fontSize: 12,
  opacity: 0.6,
});

function Footer() {
  return (
    <RootContainer container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6} textAlign="center">
        {/* <Logo
          src="https://static1.s123-cdn-static-a.com/uploads/7229067/400_642b1b8106cce.png"
          alt="Footer Logo"
        /> */}
        <LinksContainer container item justifyContent="center">
          <FooterLink href="https://wa.me/0542772792" target="_blank">
            <IconContainer>
              <WhatsAppIcon />
            </IconContainer>
            WhatsApp
          </FooterLink>
          <FooterLink
            href="https://www.facebook.com/profile.php?id=100090154691368"
            target="_blank"
          >
            <IconContainer>
              <FacebookIcon />
            </IconContainer>
            Facebook
          </FooterLink>
          <FooterLink href="mailto:shemenotef@gmail.com" target="_blank">
            <IconContainer>
              <EmailIcon />
            </IconContainer>
            Email
          </FooterLink>
        </LinksContainer>
        <Disclaimer>© 2023 Shemen Otef. All rights reserved.</Disclaimer>
      </Grid>
    </RootContainer>
  );
}

export default Footer;
