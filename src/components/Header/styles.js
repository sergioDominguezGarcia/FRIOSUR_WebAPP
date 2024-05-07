import styled from "styled-components";

export const Header = styled.div`
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.3); */
  background-color: #78997dd4;
  backdrop-filter: blur(11.7px);
  display: flex;
  width: 100vw;
  max-width: 100%;
  max-height: 167px;
  position: fixed;
  color: #fff;
  font-family: k2d;
  justify-content: space-between;
  transition: background-color 0.4s ease;
  @media (max-width: 1026px) {
    max-height: 137px;
  }
`

export const Logo = styled.div`
  align-items: center;
  display: flex;
  height: 129px;
  width: 206px;
  margin-left: 45px;
  @media (max-width: 1026px) {
    margin-left: 25px;
  }
`

export const Navbar = styled.ul`
  align-content: space-around;
  /* border: 5px solid red; */
  display: flex;
  font-size: 32px;
  height: 100%;
  width: 74%;
  list-style: none;
  @media (max-width: 1026px) {
    font-size: 23px;
    align-content: start;
  }
`

export const NavLink = styled.li`
  align-items: center;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5px;
`;

export const Link = styled.a`
  align-content: center;
  border-radius: 15px;
  /* border: 2px solid white; */
  color: #fff;
  text-decoration: none;
  margin: 5px;
  padding: 0.5rem;
  height: 5rem;
  width: auto;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #dcdcdc;
    background-color: #446844;
    transition: 0.5s all ease;
  }
`;
