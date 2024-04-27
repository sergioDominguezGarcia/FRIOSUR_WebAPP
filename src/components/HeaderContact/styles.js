import styled from "styled-components";

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: rgba(68, 104, 68, 0.2);
  backdrop-filter: blur(8px);
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
  font-weight:600;
  height: 100%;
  width: 74%;
  list-style: none;
  
`;

export const NavLink = styled.li`
  /* align-content: center; */
  align-items:center;
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
  color: rgba(68, 104, 68, 1);
  text-decoration: none;
  margin: 5px;
  padding: 0.5rem;
  height: 5rem;
  width: auto;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {

    background-color: rgba(68, 104, 68, 0.4);
    transition: 0.5s all ease;
  }
`;
