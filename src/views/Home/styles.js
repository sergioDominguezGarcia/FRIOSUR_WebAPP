import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeContainer = styled.div`
  box-sizing: border-box;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;

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
  
  @media (max-width: 870px) {
    flex-direction: column;
  }
`
export const Box = styled.div`
  text-align: left;
  display: flex;
  padding: 1rem;
  margin-top: 12rem;
  flex-flow: column;

  width: 40%;
  justify-content:space-around ;
  align-content: center;
  
  /* height: 40%; */
  /* border: 2px solid greenyellow; */
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  /* border: 2px dashed greenyellow; */
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
export const A = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  left: 4.4rem;
  line-height: 44px;
  text-align: left;
  max-width: 80%;
  /* border: 2px solid purple; */
`
export const Tittle = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? '900' : '400')};
  font-size: 6rem;
  line-height: 117px;
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




// export const Section = styled.div``;

// export const Section = styled.div``;
