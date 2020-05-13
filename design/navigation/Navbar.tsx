import styled from "styled-components";
import { greaterThanMd } from "../helpers/breakpoints";
import Link from "next/link";

const Nav = styled.nav`
  height: 50px;
  width: 100%;
  position: relative;
`;

const Header = styled.div`
  display: inline;
`;

const Title = styled.h1`
  display: inline-block;
  color: #fff;
  font-size: 2.6rem;
  margin: 15px;
`;

const TitleLink = styled.a`
  text-decoration: none;
`;

const Hamburger = styled.label`
  display: inline-block;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 50px;
  height: 50px;
  padding: 13px;

  > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  ${greaterThanMd`
        display: none;
    `}
`;

const Links = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 0px;
  background-color: #1d1f21;
  transition: all 0.3s ease-in;
  overflow-y: hidden;
  top: 60px;
  left: 0px;
  z-index: 2;

  ${greaterThanMd`
    position: initial;
    display: inline;
    background-color: transparent;
    transition: none;
    float: right;
    font-size: 18px;
    height: auto;
    width: auto;
  `}
`;

const HiddenCheck = styled.input`
  display: none;

  &:checked ~ ${Links} {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
`;

const StyledLink = styled.a`
  display: block;
  padding: 1rem;
  font-size: 1.9rem;
  text-align: center;
  text-decoration: none;
  color: #efefef;

  ${greaterThanMd`
    display: inline-block;
    width: auto;
    `}
`;

interface NavbarProps {
  title: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ title }) => {
  return (
    <Nav>
      <Header>
        <Link passHref href="/">
          <TitleLink>
            <Title>{title}</Title>
          </TitleLink>
        </Link>
      </Header>
      <HiddenCheck id="nav-check" type="checkbox" />
      <Hamburger htmlFor="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Links id="nav-links">
        <StyledLink href="https://github.com/clgeoio">Github</StyledLink>
      </Links>
    </Nav>
  );
};

export { Navbar };
