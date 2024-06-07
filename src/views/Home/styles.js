import styled from 'styled-components'

const breakpoints = {
  mobile: '900px',
  tablet: '1326px',
}

export const HomeContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  /* box-sizing: border-box; */
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
  border: none;
  justify-content: center;
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
  justify-content: space-around;
  gap: 1rem;
  padding: 2.5rem;
  @media (max-width: 1326px) {
    flex-direction: column;
    padding-bottom: 1.5rem;
    align-items: center;
  }
  @media (max-width: 900px) {
    justify-content: space-around;
  }
  /* border: 4px dashed greenyellow; */
`
const BoxBase = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  text-align: left;
  padding: 1rem;
`

export const Box = styled(BoxBase)`
  margin-top: 8rem;
  width: 40%;
  /* border: 1px solid red; */
  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    margin-top: 10rem;
    padding: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-top: 5rem;
  }
`

export const Box2 = styled(Box)`
  @media (max-width: 1326px) {
    width: 90%;
    margin-top: 3rem;
    
  }
  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`
export const Box3 = styled(BoxBase)`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  text-align: center;
    /* position: relative; */
  gap: 1rem;
  /* border: 2px solid red; */
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    margin-top: 3rem;
  }


`
export const CardBox = styled.div`
  width: 100%;
  height: 500px;
  max-width: 600px;
  /* border: 5px solid greenyellow; */
  padding: 20px; /* Ajusta el padding según sea necesario */
  box-sizing: border-box; /* Asegura que el padding y border se incluyan en el tamaño total */
  display: flex;
  justify-content: center;
  align-items: center;

`


export const Box4 = styled(Box3)`

@media (max-width: ${breakpoints.mobile}) {
  padding: 2rem;
  margin-top: 2rem;
}
    @media (max-width: 560px) {
    margin-top: 0rem;
  }
/* border: 2px solid pink; */
`

export const Box5 = styled(BoxBase)`
  flex-direction: column;
  margin-bottom: 3rem;
  max-width: 30%;
  background-color: #f9f9f9;
  border-radius: 15px;
  text-align: center;
  /* border: 2px solid pink; */
  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
    /* margin-top: 3rem; */
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-top: 6rem;
  }
  @media (max-width: 560px) {
    margin-top: 4rem;
  }
  @media (max-width: 390px) {
    margin-top: 6rem;
  }
`
export const Boxx = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* max-width: 98%; */
  margin-top: 0rem;
  /* padding: 4rem; */
  /* flex-wrap: wrap; */
  /* border: 2px solid red; */
  @media (max-width: 900px) {
    /* height: 22rem; */
    flex-direction: column;
  }
`
export const BoxReseña = styled(Boxx)`
  padding: 1rem;
`
export const Tittle = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? '900' : '400')};
  font-size: 3rem;
  line-height: 80px;
  /* width: 40%; */
  /* border: 2px solid purple; */
  @media (max-width: 1326px) {
    font-size: 60px;
    line-height: 50px;
    /* align-items: stretch; */
  }
  @media (max-width: 900px) {
    font-size: 30px;
    line-height: 50px;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  @media (max-width: 1326px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 870px) {
  }
  /* border: 2px dashed greenyellow; */
`

export const TextBoxR = styled(TextBox)`

  justify-content: space-around;
  gap: 0rem;
  height: 70%;
  @media (max-width: 1326px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
export const StyledLink = styled.a`
  background: #446844;
  width: 70%;
  color: #ffffff;
  cursor: pointer;
  /* max-width: 455px; */
  text-decoration: none;
  border: 3px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  max-height: 77px;
  padding: 1rem;
  max-width: 20rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 10px;
  letter-spacing: 0.16em;
  text-align: center;
  align-content: center;
  box-sizing: border-box;
  margin: 1rem 0rem 1rem 0rem;
  @media (max-width: 1326px) {
    font-size: 1rem;
    max-width: 15rem;
  }
  &:hover {
    background: #ffffff;
    color: #446844;
  }
`
export const StyledLink2 = styled(StyledLink)`
  background: #ffffff;
  color: #446844;
  border: 3px solid #446844;
  box-shadow: none;
  /* margin-top: 6rem; */
  margin-bottom: 8rem;
  font-size: 2rem;
  height: 7rem;
  width: auto;
  @media (max-width: 1326px) {
    font-size: 2rem;
    max-width: 20rem;
  }
  @media screen and (max-width: 900px) {
    margin: 0rem;
    font-size: 1rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  &:hover {
    background: #446844;
    color: #ffffff;
  }
`
export const StyledLink3 = styled(StyledLink)`
  width: 100%;
  font-size: 20px;
  @media (max-width: 1326px) {
    font-size: 16px;
  }
`
export const A = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  /* left: 4.4rem; */
  
  text-align: left;
  /* width: 50%; */
  
  /* border: 2px solid purple; */
  justify-content: center;

  @media (max-width: 1326px) {
    flex-direction: row;
    max-width: 100%;
    text-align: center;
    /* align-items: stretch; */
    /* margin-top: 1rem; */
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: 900px) {
    font-size: 20px;

    text-align: center;
  }
`
export const Acard = styled(A)`
  font-size: 16px;
  color: #698669;
  font-weight: 500;
  line-height: 25px;
  @media (max-width: 1326px) {
    flex-direction: row;

    /* align-items: stretch; */


    /* line-height: 25px; */
  }
  @media screen and (max-width: 1060px) {
    font-size: 18px;
    /* line-height: 30px; */
  }

  @media screen and (max-width: 900px) {
    font-size: 15px;
    line-height: 20px;
    margin-top: 0rem;
  }
`
export const ABox = styled.div`
  padding: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 900px) {
    padding: 1.5rem;
    
  }
    @media (max-width: 560px) {
    /* margin-top: 4rem; */
  }
  /* border : 2px solid red; */
`
export const ABox2 = styled(ABox)`
  /* margin-top: 1em; */
`
export const ABox3 = styled(ABox)`
  margin-top: 1rem;
    @media (max-width: 390px) {
    margin-top: 0rem;
  }
`
export const Section = styled.section`
  display: flex;
  width: 100%;
  /* height: 100%; */
  background-color: rgba(105, 134, 105, 1);
  flex-flow: column;
  
  justify-content: space-around;
  /* align-content: center; */
  align-items: center;
  /* border: 4px solid greenyellow; */
`
export const Section3 = styled(Section)`
  background-color: #ffffff;
  flex-flow: column;
  margin-top: 6rem;
  justify-content: center;
  @media screen and (max-width: 900px) {
    /* width: 98%; */
    margin: 0 auto;
    margin-top: 0rem;
  }
  /* border: 4px solid greenyellow; */
`
export const UpperRow = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-top: 0rem;
  justify-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0rem;
    /* height: 75%; */
    justify-content: space-between;
  }
  /* border: 2px solid purple; */
`
export const BottomRow = styled.div`
  display: flex;
  width: 100%;
  /* margin-top: 6rem; */
  /* border: 2px solid greenyellow; */
  margin: 1rem 0rem 3rem 0rem;
  justify-content: center;
  @media screen and (max-width: 1060px) {
    /* margin-top: 4rem; */
  }

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`
export const H1 = styled.a`
  color: #446844;
  font-family: Montserrat;
  font-weight: 800;
  font-style: normal;
  font-size: 50px;
  line-height: 125px;

    @media screen and (max-width: 1326px) {
    font-size: 4em;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 20px;
  }
`
export const H2 = styled.a`
  color: #ffffff;
  /* flex-direction: column; */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  /* line-height: 78px; */
  @media screen and (max-width: 1326px) {
    font-size: 30px;
    line-height: 30px;
  }
  @media screen and (max-width: 1060px) {
    font-size: 30px;
    line-height: 30px;
  }
  @media screen and (max-width: 900px) {
    font-size: 20px;
    line-height: 30px;
  }
  `

export const H2g = styled(H2)`
  color: #698669;
  font-size: 20px;
`
export const Text = styled(TextBox)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  /* margin:  34rem 0rem 4rem 0rem; */

  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
  }
`
export const Afrio = styled(A)`
  text-align: center;
  font-size: 30px;
  line-height: 50px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`

export const SeparatorGreen = styled.div`
  border-top: 2px solid #446844;
  width: 60%;
  margin: 4rem 0rem 4rem 0rem;
`
export const SeparatorWhite = styled(SeparatorGreen)`
  border-top: 2px solid #ffffff;
  margin: 1rem 0rem 1rem 0rem;
  width: 35%;
`

export const H2Green = styled(H2)`
  font-size: 40px;
  line-height: 65px;
  margin-bottom: 1em;
  color: rgba(68, 104, 68, 1);
  font-weight: ${(props) => (props.bold ? '900' : '600')};
  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
`  
export const HBox = styled.div`
  /* margin: 4rem; */
  
  display: flex;
  flex-flow: row wrap;
  width: 70%;
  justify-content: center;
  /* border: 1px solid red; */
  text-align: center;
  @media screen and (max-width: 900px) {
    /* margin: 2rem; */
    width: 80%;
  }
`
export const Img = styled.div`
  margin: 2.5rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  /* width: 100%; */
    img {
    width: 100%;
  }
    @media screen and (max-width: 1200px) {
    /* width: 40%; */
  }
`