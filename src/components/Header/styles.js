import styled from 'styled-components'

export const Header = styled.div`
  z-index: 1000;
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.3); */
  background-color: #78997dd4;
  backdrop-filter: blur(3.7px);
  display: flex;
  width: 100vw;
  max-width: 100%;
  max-height: 167px;
  position: fixed;
  color: #fff;
  font-family: k2d;
  justify-content: center;
  transition: background-color 0.4s ease;
  @media (max-width: 1026px) {
    /* max-height: 100px; */
  }
`
export const HeaderContent = styled(Header)`
  position: static;
  width: 1440px;
  justify-content: space-between;
  /* border: 5px solid red; */
  background-color: #78997d00;
  backdrop-filter: none;  
`

export const Logo = styled.div`
  align-items: center;
  display: flex;
  /* margin-left: 25px; */
  margin: 12px ;
    img {
    width: 65%;
    max-width: 200px;
    min-width: 100px;
  }
  @media (max-width: 1026px) {
    margin-left: 12px;
    img {
      width: 40%;
    }
  }
`

export const Navbar = styled.a`
  /* border: 5px solid red; */
  justify-content: space-around;
  display: flex;

  font-size: 16px;
  /* gap: 40px; */
  height: 100%;
  width: 60%;
  text-shadow: 1px 1px 2px #666666;
  list-style: none;
  font-weight: 600;
  transition: transform 0.3s ease;
  @media (max-width: 1026px) {
    font-size: 15px;
    width: 80%;
    height: 60px;
    font-weight: 600;
    justify-content: space-around;
  }
  @media (max-width: 570px) {
    width: 100%;
    justify-content: space-around;
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
  
  /* width: 100%; */
  
  
  /* margin: 5px 35px 5px 0px; */
  @media (max-width: 1026px) {
    /* font-size: 15px; */
    /* align-content: start;
    margin: 0px; */
  }
  @media (max-width: 1200px) {
    /* margin-top: 50px; */
  }
  /* border: 2px solid blue; */
`

export const Link = styled.a`
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  width: auto;
  padding: 0.5em;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #dcdcdc;
    background-color: #446844;
    transition: 0.5s all ease;
  }
  @media (max-width: 1026px) {
    padding: 0rem;
    /* margin: 3px; */
    
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