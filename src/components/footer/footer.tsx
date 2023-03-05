import {
  RootContainer,
  Logo,
  LinksContainer,
  Link,
  Disclaimer,
} from "./footer.style";
function Footer() {
  return (
    <RootContainer>
      <Logo src="https://via.placeholder.com/150x50" alt="Footer Logo" />
      <LinksContainer>
        <Link href="#">Link 1</Link>
        <Link href="#">Link 2</Link>
        <Link href="#">Link 3</Link>
        <Link href="#">Link 4</Link>
        <Link href="#">Link 5</Link>
        <Link href="#">Link 6</Link>
        <Link href="#">Link 7</Link>
        <Link href="#">Link 8</Link>
      </LinksContainer>
      <Disclaimer>© 2023 My Website. All rights reserved.</Disclaimer>
    </RootContainer>
  );
}

export default Footer;
