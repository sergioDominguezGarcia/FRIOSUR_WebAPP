import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #78997d;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  height: 202px;
  width: 100%;
  padding: 0.5rem;
`;

export const Navbar = styled.nav`
  width: 100%;
`;
export const NavbarLogo = styled.div`
  justify-content: flex-start;
  height: 206px;
  width: 129px;
  margin-top: 80px;
  margin-left: 30px;
`;

export const NavbarLinks = styled.ul`
  list-style: none;
  font-family: k2d;
  font-size: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  /* border: solid 1px blue; */
  justify-content: flex-end;

`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 220px;
  &:last-child {
    margin-right: 100px;
  }
`;
