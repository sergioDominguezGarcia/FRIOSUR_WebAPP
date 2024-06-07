import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: black;
  display: flex;
  position: static;
  bottom: 0;

  flex-direction: row;

  justify-content: space-between;
  gap: 1rem;
  padding: 10px 50px 10px 50px;
  @media (max-width: 880px) {
    padding: 10px 15px 0px 10px;
    padding: 10px;
    justify-content: space-around;
  }
`

export const Container1 = styled.div`
  display: flex;
  max-width: 30%;
  box-sizing:border-box;
  /* padding: 10px; */
  flex-direction: column;

  font-size: 24px;
  @media (max-width: 768px) {

  }
`

export const Logo = styled.div`
  display: flex;
  width: 60%;

  img {
    width: 100%;
    /* margin: 0.7rem; */
  }
  @media (max-width: 768px) {
    img {
      margin: 0rem;
    }
  }
`

export const Media = styled.div`
  display: flex;
  /* gap: 8px; */
  max-width:10rem;
  @media (max-width: 768px) {
    margin-top: 0px;

  }
`
export const MediaLogo = styled.div`
  /* display: flex; */

  margin: auto 0;
  padding: 6px;
  height: 44px;

  max-width: 30%;
  img {
    width: 30px;
    height: auto;
  }
  @media (max-width: 768px) {
    /* height: 30px; */
    /* width: 30px; */
  }
`

export const Container2 = styled.div`
  display: flex;

  /* max-height: 100px; */
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
  /* border: 2px dotted purple; */
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Container3 = styled.div`



  justify-content: space-around;
  /* border: 2px dotted purple; */
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
  margin-top: 2rem;
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
  letter-spacing: 0.2rem;
  width: auto;
  cursor: pointer;
  transition: 0.5s all ease;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  /* border: 2px dotted yellowgreen; */

  justify-content: space-between;
  @media (max-width: 768px) {
  }
`

export const Ubi = styled.a`
  text-align: left;

  margin-top: 1rem;
    margin-bottom: 0rem;
  color: #fff;
  font-size: 16px;
  height: auto;
  width: auto;
  cursor: pointer;
  transition: 0.5s all ease;

  @media (max-width: 840px) {
    font-size: 12px;
  }
`

export const Hour = styled.a`
  display: flex;
  /* align-items: flex-start; */
  text-align: left;
  font-weight: 100;
  font-size: 12px;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  /* padding:1rem; */
  margin: 1rem 0;
  height: auto;
  width: 100%;
  cursor: pointer;
  transition: 0.5s all ease;

  @media (max-width: 840px) {
    font-size: 13px;
  }
`
