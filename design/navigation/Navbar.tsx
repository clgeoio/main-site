import styled from "styled-components";
import Link from "next/link";
import { greaterThanMd } from "../helpers/breakpoints";

const backgroundColor = "#4d4d4d";

const Nav = styled.nav`
  height: 50px;
  width: 100%;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  position: relative;
`;

const Header = styled.div`
  display: inline;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
`;

const HamburgerContainer = styled.div`
  display: inline-block;
  position: absolute;
  right: 0px;
  top: 0px;

  ${greaterThanMd`
        display: none;
    `}
`;

const Hamburger = styled.label`
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 13px;

  > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
`;

const Links = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 0px;
  background-color: #333;
  transition: all 0.3s ease-in;
  overflow-y: hidden;
  top: 50px;
  left: 0px;

  ${greaterThanMd`
    position: initial;
    display: inline;
    background-color: transparent;
    float: right;
    font-size: 18px;
    height: auto;
    width: auto;
  `}
`;

const HiddenCheck = styled.input`
  display: none;

  &:checked + ${Links} {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
`;

const StyledLink = styled.a`
  display: block;
  width: 100%;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #efefef;

  ${greaterThanMd`
    display: inline-block;
    width: auto;
    `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

interface NavbarProps {
  title: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ title }) => {
  return (
    <Nav>
      <Header>
        <Title>{title}</Title>
      </Header>
      <HamburgerContainer>
        <Hamburger htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </HamburgerContainer>
      <HiddenCheck id="nav-check" type="checkbox" />
      <Links>
        <Link href="https://github.com" passHref>
          <StyledLink>Github</StyledLink>
        </Link>
        <StyledLink href="http://stackoverflow.com/users/4084003/">
          Stackoverflow
        </StyledLink>
        <StyledLink href="https://in.linkedin.com/in/jonesvinothjoseph">
          LinkedIn
        </StyledLink>
        <StyledLink href="https://codepen.io/jo_Geek/">Codepen</StyledLink>
        <StyledLink href="https://jsfiddle.net/user/jo_Geek/">
          JsFiddle
        </StyledLink>
      </Links>
    </Nav>
  );
};

export { Navbar };
