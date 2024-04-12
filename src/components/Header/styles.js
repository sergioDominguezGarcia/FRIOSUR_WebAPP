import styled from "styled-components";

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.isScrolled ? "rgba(255, 255, 255, 0.25)" : "#78997d"};
  backdrop-filter: blur(3.5px);
  width: 100%;
  position: fixed;
  color: #fff;
  display: flex;
  font-family: k2d;
  height: 167px;
  justify-content: space-between;
  transition: background-color 0.4s ease;
`;



export const Logo = styled.div`
  align-items: center;
  display: flex;
  height: 129px;
  width: 206px;
  margin-left: 45px;
`;

export const Navbar = styled.ul`
  align-content: space-around;
  /* border: 5px solid red; */
  display: flex;
  font-size: 32px;
  height: 100%;
  width: 74%;
  list-style: none;
`;

export const NavLink = styled.li`
  /* align-content: center; */
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
  height: auto;
  width: auto;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #dcdcdc;
    background-color: #446844;
    transition: 0.5s all ease;
  }
`;
