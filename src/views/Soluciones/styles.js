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
export const SeparatorGreen = styled.div`
  border-top: 2px solid #446844;
  width: 80%;
  margin: 4rem 0rem 4rem 0rem;
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
export const Boxx = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0rem;
  padding: 4rem;
  flex-wrap: wrap;
  
  /* border: 2px solid red; */
  @media (max-width: 900px) {
    height: 22rem;
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
export const BoxSolutions = styled(Boxx)`


@media screen and (max-width: 900px) {
    height: auto;
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
export const Text = styled(TextBox)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
    /* height: 50%; */
    /* text-align: center; */
  }

  /* border: 2px dashed greenyellow; */
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
export const SeparatorWhite = styled(SeparatorGreen)`
  border-top: 2px solid #ffffff;
  margin: 2rem 0rem 2rem 0rem;
  width: 35%;
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
  max-width: 80%;
  justify-content: center;
  @media (max-width: 1340px) {
    flex-direction: row;
    max-width: 100%;
    margin-top: 1rem;
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: 900px) {
    font-size: 20px;

    text-align: center;
  }
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
  /* margin-top: 6rem; */
  /* border: 4px solid greenyellow; */
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 98%;
    margin: 0 auto;
    margin-top: 0rem;
  }
`
export const StyledLink = styled.a`
  background: #446844;
  width: 70%;
  color: #ffffff;
  cursor: pointer;
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
export const StyledLink4 = styled(StyledLink)`
  width: 20%;
  height: 5rem;
  font-size: 16px;
  @media (max-width: 1326px) {
    
    font-size: 10px;
    height: 20%;
    width: 25%;
    line-height: 15px;
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
export const H1solutions = styled(H1)`
  
  font-size: 48px;
  @media screen and (max-width: 900px) {
    font-size: 28px;
  }
`
export const H2 = styled.a`
  color: #ffffff;
  /* flex-direction: column; */
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
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
  padding: 0.5rem;
  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
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
  font-size: 60px;
  @media screen and (max-width: 900px) {
    gap: 40px;
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
  margin: 1rem 0rem 5rem 0rem;
  img{
    width: 50%;  
  }
    @media screen and (max-width: 900px) {
      margin: 0rem 0rem 1rem 0rem;
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
export const List = styled.ul`
  width: 90%;
  margin-top: 0rem;

  /* border: 2px dashed greenyellow; */
`
export const List2 = styled(List)`
  display: flex;
  flex-direction: column;
  width: 85%;

  /* border: 2px dashed red; */
  @media screen and (max-width: 900px) {
  }
`


