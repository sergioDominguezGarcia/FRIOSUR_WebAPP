import styled from 'styled-components'

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
    /* max-height: 100px; */
  }
`

export const Logo = styled.div`
  align-items: center;
  display: flex;
  margin-left: 35px;
  img {
    width: 80%;
    max-width: 200px;
    min-width: 100px;
  }
  @media (max-width: 1026px) {
    margin-left: 10px;
    img {
      width: 60%;
    }
  }

`

export const Navbar = styled.ul`
  align-content: space-around;
  /* border: 5px solid red; */
  display: flex;
  font-size: 30px;
  height: 100%;
  width: 100%;
  list-style: none;
  transition: transform 0.3s ease;
  @media (max-width: 1026px) {
    font-size: 15px;
    width: 80%;
    height: 60px;
  }
  @media (max-width: 570px) {
    width: 100%;
    margin-right: 10px;
    font-size: 11px;
  }
  /* @media (max-width: 1200px) {
    position: fixed;
    font-size: 25px;
    right: 0;
    margin-left: 45px;
    top: 0;
    margin-top: 0;
    height: 100vh;
    width: 200px;
    background-color: #446844;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    transform: ${({ menuOpen }) =>
    menuOpen ? 'translateX(0)' : 'translateX(100%)'};
  } */
`

export const NavLink = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* margin: 5px 35px 5px 0px; */
  @media (max-width: 1026px) {
    /* font-size: 15px; */
    /* align-content: start;
    margin: 0px; */
  }
  @media (max-width: 1200px) {
    /* margin-top: 50px; */
  } /* border: 2px solid blue; */
`

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
  @media (max-width: 1026px) {
    padding: 0rem;
    margin: 3px;
    
  }
`

export const CloseIcon = styled.div`
  /* position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: #fff; */
  /* @media (min-width: 1201px) {
    display: none;
  } */
`
export const HamburgerIcon = styled.div`
  /* display: none;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 2rem;
    margin-right: 45px;
  } */
`