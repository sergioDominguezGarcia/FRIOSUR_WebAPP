import styled from 'styled-components'

export const HomeContainer = styled.div`
  box-sizing: border-box;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 100%; */
  overflow-x: hidden;
  /* padding: 0 5% 0 5%; */
  margin: 0 auto;
  width: 1440px;
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
  @media (max-width: 1326px) {
    flex-direction: column;
    padding: 1.5rem;
    align-items: center;
  }
  /* border: 4px dashed greenyellow; */
`
export const SectionBackground = styled(SectionWithBackground)`
  align-content: center;
  justify-content: center;
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
export const Box4 = styled(Box)`
  width: auto;
  min-width: 60vw;
  height: 60vh;
`
export const Box6 = styled(Box4)`
  height: auto;
  width: 90%;
  margin-top: 0px;
  padding: 2rem;
  /* border: 1px solid red; */
`
export const Boxx = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;

  max-width: 98%;
  margin-top: 0;
  padding: 4rem;
  /* border: 2px solid red; */
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
  }
  /* border: 2px dashed greenyellow; */
`
export const Text = styled(TextBox)`
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  /* border: 2px dashed greenyellow; */
`
export const List = styled.ul`
  width: 80%;

  /* border: 2px dashed greenyellow; */
`
export const List2 = styled(List)`
  width: 100%;

`
export const Li = styled.li`
  margin-top: 2rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
`
export const Li2 = styled(Li)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;

  color: #698669;
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
export const ABox = styled.div``

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
export const Afront = styled(A)`
  transform: perspective(500px) rotateY(0deg);
`
export const Aback = styled(A)`
  transform: perspective(500px) rotateY(180deg);
`

export const Section = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: rgba(105, 134, 105, 1);
  flex-flow: column;

  justify-content: space-around;
  /* align-content: center; */
  align-items: center;

`
export const Box3 = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 24%;
  height: auto;
  padding: 2.5rem;
  margin-top: 6rem;

  /* border: 2px solid purple; */
`
export const UpperRow = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: space-around;
  /* margin: 0rem 5rem 0rem 5rem; */
  /* position: relative; */
  /* border: 2px solid purple; */
  @media (max-width: 1321px) {
    height: 700px;
  }
`
export const BottomRow = styled.div`
  padding-bottom: 2rem;
  display: flex;
  width: 100%;
  /* margin-top: 6rem; */
  /* border: 2px solid greenyellow; */
  justify-content: center;
  @media (max-width: 1321px) {
    height: 1100px;
  }
`
export const Box5 = styled.div`
  margin-top: 6rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  width: 100vw;
  margin-top: 20rem;
  /* border: 2px solid purple; */
`
export const StyledLink = styled.a`
  background: #446844;
  color: #ffffff;
  cursor: pointer;
  /* max-width: 455px; */
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
  &:hover {
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
  /* flex-direction: column; */
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
  margin-top: 6rem;

  /* border: 4px solid greenyellow; */
`
export const StyledLink2 = styled(StyledLink)`
  background: #ffffff;
  color: #446844;
  border: 3px solid #446844;
  box-shadow: none;
  margin: 6rem;

  &:hover {
    background: #446844;
    color: #ffffff;
  }
`
export const H2Green = styled(H2)`
  color: rgba(68, 104, 68, 1);
  font-weight: ${(props) => (props.bold ? '900' : '600')};
`
export const Img = styled.div`
  margin: 4rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 100%;
`
export const HBox = styled.div`
  margin: 4rem;
  gap: 0.7rem;
  display: flex;
  flex-flow: row wrap;
  width: 40%;
  justify-content: center;
`
export const H2Box = styled(HBox)`
  margin: 1rem;
  width: 90%;
  text-align: center;
  gap: 70px;
`
export const Agreen = styled(A)`
  font-size: 30px;
  color: rgba(68, 104, 68, 1);
  font-weight: 550;
  text-align: center;
  line-height: 30px;
`
export const Atitle = styled(A)`
  font-size: 35px;
  color: rgba(68, 104, 68, 1);
  font-weight: 650;
  text-align: center;
  line-height: 35px;
`

export const Acard = styled(A)`
  @media (max-width: 1715px) {
    flex-direction: row;
    max-width: 100%;
    align-items: stretch;
    margin-top: 1rem;
    font-size: 34px;
    line-height: 45px;
  }
`


// SOLUTIONS


export const Sphere = styled.div`
  /* border: 3px solid greenyellow; */
`
export const Roulette = styled.div`
  background-color: #ffffff;
  /* border: 5px solid white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1500px;
  width: 100%;
  
  /* border: 1px solid greenyellow; */
`

export const Upper = styled.div`
  display: flex;
  width: 90%;
  height: 30%;
  align-items: center;
  justify-content: space-around;

  padding: 0rem 6rem 0rem 6rem;
  /* margin-bottom: 5%; */
  top: 0px;

  /* border: 2px solid red; */
`
export const Mid = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: space-around;
  /* margin: auto 0; */
  /* border: 1px solid red; */
`

export const Bottom = styled.div`
  display: flex;
  width: 90%;
  height: 30%;
  align-items: center;
  justify-content: space-around;
  margin-top: 5%;
  padding: 0rem 6rem 0rem 6rem;
  /* border: 2px solid red; */
`

// FRIOSUR

export const SeparatorGreen = styled.div`
  border-top: 2px solid #446844;
  width: 80%;
  margin: 4rem 0rem 4rem 0rem;
`
export const SeparatorWhite = styled(SeparatorGreen)`
  border-top: 2px solid #ffffff;
  margin: 2rem 0rem 2rem 0rem;
  width: 35%;
`
export const TextFrio = styled(Text)`
  text-align: center;

`
export const H2Boxfrio = styled(H2Box)`
  text-align: center;
  width: 80%;
  /* border: 2px solid red; */

`
export const Afrio = styled(A)`
  text-align: center;
  line-height: 50px;
`