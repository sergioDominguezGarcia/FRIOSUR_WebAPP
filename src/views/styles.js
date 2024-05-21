import styled from 'styled-components'

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
  justify-content: space-between;
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
export const SectionBackground = styled(SectionWithBackground)`
  align-content: center;
  justify-content: center;
`
export const Box = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  text-align: left;
  padding: 1rem;
  margin-top: 12rem;
  width: 40%;
  @media (max-width: 1326px) {
    width: 90%;
    margin-top: 10rem;
    padding: 0px;
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 5rem;
  }
  /* border: 2px solid greenyellow; */
`
export const Box2 = styled(Box)`
  @media (max-width: 1326px) {
    width: 90%;
    margin-top: 5rem;
  }
  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`
export const Box4 = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  /* min-width: 60vw; */
  height: 60vh;
  /* border: 2px solid greenyellow; */
`
export const Box6 = styled(Box4)`
  height: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0px;
  /* padding: 2rem; */
  /* border: 1px solid red; */
`
export const Boxx = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 98%;
  margin-top: 0rem;
  padding: 4rem;
  flex-wrap: wrap;
  /* border: 2px solid red; */
  @media (max-width: 900px) {
    height: 22rem;
  }
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
  width: 100%;
  /* border: 1px solid red; */
  @media (max-width: 1325px) {
    justify-content: center;
  }
  @media (max-width: 900px) {
    width: 100%;

  }

  @media (max-width: 870px) {

    width: 90%;
  
  }
  /* border: 2px dashed greenyellow; */
`
// SOLUTIONS

export const Text = styled(TextBox)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 100%;
    /* height: 50%; */
    /* text-align: center; */
  }

  /* border: 2px dashed greenyellow; */
`
export const List = styled.ul`
  width: 100%;
  margin-top: 0rem;

  /* border: 2px dashed greenyellow; */
`
export const List2 = styled(List)`
  
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px dashed red;
  @media screen and (max-width: 900px) {
    
  }
`
export const Li = styled.li`
  margin-top: 2rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 27px;
  }
`
export const Li2 = styled(Li)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  /* line-height: 45px; */

  color: #698669;
  @media screen and (max-width: 900px) {
    font-size: 20px;
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
export const ABox = styled.div`
  padding: 2rem;
  /* border : 2px solid red; */
  @media (max-width: 900px) {
    padding: 1.5rem;
    margin-top: 0rem;
  }
`

export const A = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  left: 4.4rem;
  line-height: 44px;
  text-align: left;
  /* width: 50%; */
  max-width: 80%;
  /* border: 2px solid purple; */
  justify-content: center;

  @media (max-width: 1340px) {
    flex-direction: row;
    max-width: 100%;
    /* align-items: stretch; */
    margin-top: 1rem;
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: 900px) {
    font-size: 20px;

    text-align: center;
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
  /* height: 100%; */
  background-color: rgba(105, 134, 105, 1);
  flex-flow: column;

  justify-content: space-around;
  /* align-content: center; */
  align-items: center;
`
export const Section3 = styled(Section)`
  background-color: #ffffff;
  flex-flow: column;
  margin-top: 6rem;
  /* border: 4px solid greenyellow; */
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 98%;
    margin: 0 auto;
    margin-top: 0rem;
  }
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
  @media (max-width: 900px) {
    margin-top: 2rem;
  }
  /* border: 2px solid purple; */
`
export const UpperRow = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: space-around;
  /* border: 2px solid purple; */
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: 45rem;
    justify-content: space-between;
  }
`
export const BottomRow = styled.div`
  padding-bottom: 2rem;
  display: flex;
  width: 100%;
  /* margin-top: 6rem; */
  /* border: 2px solid greenyellow; */
  margin-top: 6rem;
  justify-content: center;
  @media screen and (max-width: 1060px) {
    margin-top: 3rem;
  }

  @media screen and (max-width: 900px) {
    margin-top: 0rem;
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
  @media (max-width: 900px) {
    margin-top: 10rem;
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
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 10px;
  letter-spacing: 0.16em;
  text-align: center;
  align-content: center;
  box-sizing: border-box;
  @media (max-width: 1326px) {
    font-size: 1rem;
  }
  &:hover {
    background: #ffffff;
    color: #446844;
  }
`
export const StyledLink3 = styled(StyledLink)`
  width: auto;
  height: 5rem;
  @media (max-width: 1326px) {
    font-size: 16px;
  }
`
export const StyledLink4 = styled(StyledLink)`
  width: 30%;
  height: 5rem;
  margin-top: 4rem;
  @media (max-width: 1326px) {
    width: 100%;
    line-height: 25px;
  }
`

export const H1 = styled.a`
  color: #446844;

  font-family: Montserrat;
  font-weight: 800;
  font-style: normal;
  font-size: 80px;
  line-height: 125px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    ine-height: 0px;
  }
`
export const H2 = styled.a`
  color: #ffffff;
  /* flex-direction: column; */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 78px;
  @media screen and (max-width: 1326px) {
    font-size: 50px;
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

export const StyledLink2 = styled(StyledLink)`
  background: #ffffff;
  color: #446844;
  border: 3px solid #446844;
  box-shadow: none;
  /* margin-top: 6rem; */
  margin-bottom: 8rem;
  font-size: 3rem;
  height: 7rem;
  width: auto;
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
export const H2Green = styled(H2)`
  font-size: 60px;
  /* letter-spacing: 0.1em; */
  margin-bottom: 4rem;
  color: rgba(68, 104, 68, 1);
  font-weight: ${(props) => (props.bold ? '900' : '600')};
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`
export const H2solutions = styled(H2Green)`
  font-size: 30px;
  line-height: 45px;
    @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`

export const Img = styled.div`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  /* width: 100%; */
`
export const Img2 = styled(Img)`
  margin-top: 1rem;
`
export const Img3 = styled(Img)`
  margin-top: 0rem;

`
export const HBox = styled.div`
  margin: 4rem;
  /* gap: 0.7rem; */
  display: flex;
  flex-flow: row wrap;
  width: 70%;
  justify-content: center;
  /* border: 1px solid red; */
  text-align: center;
  @media screen and (max-width: 900px) {
    margin: 2rem;
    width: 80%;
  }
`
export const H2Box = styled(HBox)`
  margin: 1rem;
  width: 90%;
  text-align: center;
  gap: 70px;
  text-align: center;
  @media screen and (max-width: 900px) {
    gap: 40px;
  }
`
export const Agreen = styled(A)`
  font-size: 30px;
  color: rgba(68, 104, 68, 1);
  font-weight: 550;
  text-align: center;
  line-height: 30px;

  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`
export const Atitle = styled(A)`
  font-size: 35px;
  color: rgba(68, 104, 68, 1);
  font-weight: 650;
  text-align: center;
  line-height: 35px;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`

export const Acard = styled(A)`
  font-size: 20px;

  /* border: 1px solid red; */
  @media (max-width: 1326px) {
    flex-direction: row;
    max-width: 100%;
    align-items: stretch;
    margin-top: 1rem;
    font-size: 30px;
    line-height: 45px;
  }
  @media screen and (max-width: 1060px) {
    font-size: 20px;
    line-height: 35px;
  }

  @media screen and (max-width: 900px) {
    font-size: 15px;
    line-height: 30px;
    margin-top: 0rem;
  }
`

// SOLUTIONS

export const H1solutions = styled(H1)`
  font-size: 48px;
  @media screen and (max-width: 900px) {
    font-size: 28px;
  }
`
export const BoxSolutions = styled(Boxx)`
  @media screen and (max-width: 900px) {
    height: 40rem;
  }
`

export const Sphere = styled.div`
  /* border: 3px solid greenyellow; */
`
export const Roulette = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1500px;
  width: 100%;
  /* border: 5px solid red; */
  @media screen and (max-width: 900px) {
    flex-direction: column;

    height: 100%;
  }
  /* border: 1px solid greenyellow; */
`

export const Upper = styled.div`
  display: flex;
  margin: 0 auto;
  height: 30%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  /* padding: 0rem 6rem 0rem 6rem; */

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 100%;
    margin-top: 3rem;
    padding: 0rem;
  }
  /* border: 2px solid red; */
`
export const Mid = styled.div`
  display: flex;
  /* width: 100%; */
  height: 20%;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 100%;
    margin-top: 3rem;
    padding: 0rem;
  }
  /* border: 2px solid red; */
`

export const Bottom = styled.div`
  display: flex;
  /* width: 90%; */
  height: 30%;
  align-items: center;
  justify-content: space-around;
  margin-top: 5%;
  /* padding: 0rem 6rem 0rem 6rem; */
  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 100%;
    margin-top: 3rem;
    padding: 0rem;
  }
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
  display: flex;
  flex-direction: column;
`
export const H2Boxfrio = styled(H2Box)`
  display: flex;

  justify-content: center;

  text-align: center;
  width: 100%;

`
export const Afrio = styled(A)`
  text-align: center;
  /* line-height: 20px; */
`
