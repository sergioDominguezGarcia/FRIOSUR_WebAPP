import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: black;
  display: flex;
  position: static;
  bottom: 0;

  flex-direction: row;

  justify-content: space-between;
  gap: 1rem;
  padding: 50px;
  @media (max-width: 880px) {
    padding: 10px;
  }
`

export const Container1 = styled.div`
  display: flex;

  width: 33%;
  gap: 1rem;    
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Logo = styled.div`
  display: flex;
  width: 100%;
  min-width: 150px;
  img {
    width: 70%;
    margin: 0.7rem;
  }
  @media (max-width: 768px) {

    img {
      width: 50%;
    }
  }
`

export const Media = styled.div`
  display: flex;
  margin-top: 20px;   
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`
export const MediaLogo = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  /* margin-right: 0.5rem; */
  height: 44px;
  width: 80px;
  img {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 768px) {
    /* height: 30px; */
    /* width: 30px; */
  }
`

export const Container2 = styled.div`
  display: flex;
  width: 33%;
  flex-direction: column;

  font-size: 24px;
  /* border: 2px dotted purple; */
  @media (max-width: 768px) {
  }
`

export const NavWrap = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Container3 = styled.div`
  width: 33%;

  flex-direction: row;
  /* border: 2px dotted yellowgreen; */
  @media (max-width: 768px) {
  }
`

export const Navbar = styled.a`  
  display: flex;
  flex-direction: column;
  height: 100%;
  list-style: none;
  width: auto;
  
  @media (max-width: 768px) {

  }
`
export const SeparatorWhite = styled.div`
  width: 80%;
  border-top: 1px solid #ffffff;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const NavLink = styled.li`
  display: flex;
  width: 100%;
`

export const Link = styled.a`
  font-weight: 400;
  color: #fff;
  height: auto;
  width: auto;
  cursor: pointer;
  transition: 0.5s all ease;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: space-between;
  @media (max-width: 768px) {

  }
`

export const Ubi = styled.a`
  text-align: left;
  font-weight: 500;
  margin-top: 1.5rem;
  color: #fff;
  font-size: 18px;
  height: auto;
  width: auto;
  cursor: pointer;
  transition: 0.5s all ease;

  @media (max-width: 840px) {
    font-size: 15px;
  }
`

export const Hour = styled.a`
  display: flex;
  align-items: flex-start;
  text-align: left;
  font-weight: 100;
  font-size: 16px;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  margin: 1rem;
  height: auto;
  width: 100%;
  cursor: pointer;
  transition: 0.5s all ease;

  @media (max-width: 840px) {
    font-size: 13px;
  }
`
