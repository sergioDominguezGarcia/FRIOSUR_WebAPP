import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
  box-sizing: border-box;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 100%; */
  overflow-x: hidden;
`
export const SectionWithBackground = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: row;
  height: auto;
  max-width: 100%;
  max-height: 80rem;
  justify-content: space-between;
  gap: 1rem;
  padding: 2.5rem;

  /* border: 4px dashed greenyellow; */
  @media (max-width: 1326px) {
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;

  }
`
export const Box = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  text-align: left;
  padding: 1rem;
  margin-top: 12rem;
  width: 40%;
  @media (max-width: 1326px) {
    width: 90%;
    margin-top: 10rem;
  }
  /* border: 2px solid greenyellow; */
`
export const Box2 = styled(Box)`
  @media (max-width: 1326px) {
    width: 90%;
    margin-top: 5rem;
  }
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  @media (max-width: 870px) {
    flex-direction: row;
    width: 90%;
    align-items: stretch;
    /* border: 2px dashed greenyellow; */
  }
`
export const TextBoxR = styled(TextBox)`
  flex-direction: row;
  justify-content: space-between;
  height: 70%;
  @media (max-width: 1326px) {
    justify-content: space-around;
  }
`
export const Tittle = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? '900' : '400')};
  font-size: 6rem;
  line-height: 117px;
  /* width: 40%; */
  /* border: 2px solid purple; */
  @media (max-width: 1326px) {
    font-size: 5em;
    line-height: 90px;
    /* align-items: stretch; */
  }
`
export const A = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  left: 4.4rem;
  line-height: 44px;
  text-align: left;
  /* width: 50%; */
  max-width: 80%;
  /* border: 2px solid purple; */
  justify-content: center;

  @media (max-width: 1715px) {
    flex-direction: row;
    max-width: 100%;
    align-items: stretch;
    margin-top: 1rem;
    font-size: 56px;
    line-height: 60px;
  }
`
export const Section = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(105, 134, 105, 1);
  flex-flow: column;
`
export const Box3 = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 24%;
  padding: 2.5rem;
  /* border: 2px solid purple; */
  margin-top: 6rem;
`
export const UpperRow = styled.div`
    display: flex;

    justify-content: space-around;
    /* border: 2px solid purple; */
  `  
export const BottomRow = styled.div`
    padding-bottom: 2rem;
  `
export const ABox = styled.div`
  `    
export const Box5 = styled.div`
  margin-top: 6rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  width: 100vw;
  /* border: 2px solid purple; */
`
export const StyledLink = styled(Link)`
  background: #446844;
  color: #ffffff;
  max-width: 415px;
  text-decoration: none;
  border: 3px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  max-height: 77px;
  padding: 1rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.16em;
  text-align: center;
  align-content: center;
  box-sizing: border-box;
  @media (max-width: 1326px) {
    font-size: 2.8rem;
  }
  &:hover{
    background: #ffffff;
    color: #446844;
  
  }
`
export const H1 = styled.a`
  color: #446844;
  font-family: Montserrat;
  font-weight: 800;
  font-style: normal;
  font-size: 102.56px;
  line-height: 125px;
`
export const H2 = styled.a`
  color: #ffffff;
  flex-direction: column;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
`
export const Section3 = styled(Section)`
  display: flex;
  background-color: #ffffff;
  flex-flow: column;

  /* border: 4px solid greenyellow; */
`
export const Boxx = styled(Box)`
  display: flex;
  justify-content: center;
  /* border: 2px solid greenyellow; */
  width: 100%;
  /* height: 100%; */
  max-width: 98%;
  margin-top: 0;
  /* padding: 2rem; */
`
export const StyledLink2 = styled(StyledLink)`
  background: #ffffff;
  color: #446844;
  border: 3px solid #446844;
  box-shadow: none;
  margin: 6rem;

  &:hover{
    background: #446844;
    color: #ffffff;
  
  }
`

export const H2Green = styled(H2)`
  color: rgba(68, 104, 68, 1);
  width: auto;
  /* border: 3px solid red; */


  font-weight: ${(props) => (props.bold ? '900' : '600')};
`
export const Img = styled.div`
  margin: 4rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  /* width: 60%; */
  /* border: 3px solid #446844; */
`
export const HBox = styled.div`
margin: 4rem;
gap: 0.7rem;
display: flex;
flex-flow: row wrap;
width: 40%;
/* border: 3px solid red; */
justify-content: center;
`;

// export const Section = styled.div``;
