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
  /* padding: 2.5rem; */
  @media (max-width: 1326px) {
    flex-direction: column;
    /* padding-bottom: 1.5rem; */
    align-items: center;
  }
  @media (max-width: 900px) {
    justify-content: space-between;
  }
  /* border: 4px dashed greenyellow; */
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
export const Box4 = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 14rem 2rem 8rem 2rem;
  @media (max-width: 420px) {
    margin: 8rem 1rem 3rem 1rem;
  }
`
export const SectionBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 8rem 2rem;
  padding:0 2rem;
  @media (max-width: 420px) {
    margin: 4rem 0rem;
  }
`

export const Box6 = styled(Box4)`
  height: auto;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  /* padding: 2rem; */
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* gap: 1rem; */
  width: 100%;
  /* border: 1px solid red; */
  @media (max-width: 1325px) {
    justify-content: center;
  }
  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 870px) {
    width: 100%;
  }
`
export const Text = styled(TextBox)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* margin:  34rem 0rem 4rem 0rem; */
  padding: 1.5rem;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 420px) {
      padding: 0rem;
  }


`
export const TextFrio = styled(Text)`
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const H2 = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 80px;
  @media screen and (max-width: 1326px) {
    font-size: 30px;
    line-height: 30px;
  }

  @media screen and (max-width: 1060px) {
    font-size: 25px;
    line-height: 30px;
  }

  @media screen and (max-width: 900px) {
    font-size: 20px;
    line-height: 25px;
  }
`
export const H2Green = styled(H2)`
  font-size: 50px;

  /* margin-bottom: 4rem; */
  color: rgba(68, 104, 68, 1);
  font-weight: ${(props) => (props.bold ? '900' : '600')};
  @media screen and (max-width: 900px) {
    font-size: 20px;
    line-height: 20px;
  }
`
export const HBox = styled.div`
  margin: 4rem;
  display: flex;
  flex-flow: row wrap;
  width: 70%;
  justify-content: center;
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
export const H2Boxfrio = styled(H2Box)`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
    @media screen and (max-width: 900px) {
    gap: 40px;
    padding: 1.5rem;
  }
`
export const StarBox = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: space-around;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 900px) {
    gap: 40px;
    padding: 0rem;
  }
`

export const A = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  /* left: 4.4rem; */
  line-height: 44px;
  text-align: left;
  max-width: 100%;
  /* font-weight: 200; */
  justify-content: center;
  @media (max-width: 1340px) {
    flex-direction: row;
    max-width: 100%;

    font-size: 36px;
    line-height: 35px;
  }
  @media (max-width: 900px) {
    font-size: 20px;
    text-align: center;
  }
`
export const Afrio = styled(A)`
  text-align: center;
  font-size: 30px;
  line-height: 40px;
  @media (max-width: 900px) {
    font-size: 20px;
  }
`
export const Agreen = styled(A)`
  font-size: 40px;
  color: rgba(68, 104, 68, 1);
  font-weight: 550;
  text-align: center;
  line-height: 55px;
  text-align: center;
  @media screen and (max-width: 900px) {
    font-size: 23px;
      line-height: 30px;
  }
`
export const Section = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(105, 134, 105, 1);
  flex-flow: column;

  justify-content: space-around;
  /* align-content: center; */
  align-items: center;
`
export const Section3 = styled(Section)`
  display: flex;
  background-color: #ffffff;
  flex-flow: column;
  margin: 0 auto;
  padding: 2rem;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 98%;
  }
`
export const Img = styled.div`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  /* width: 100%; */
`

export const Img3 = styled(Img)`
  margin: 1rem 0rem 0rem 0rem;
`
export const Img4 = styled(Img)`
  margin: 0rem 0rem 0rem 0rem;
`

export const SeparatorGreen = styled.div`
  border-top: 2px solid #446844;
  width: 60%;
  margin: 4rem 0rem 4rem 0rem;
`
export const SeparatorWhite = styled(SeparatorGreen)`
  border-top: 2px solid #ffffff;
  margin: 1rem 0rem 2rem 0rem;
  width: 35%;
`
export const Tittle = styled.a`
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${(props) => (props.bold ? '900' : '400')};
  font-size: 3rem;
  line-height: 80px;
  @media (max-width: 1326px) {
    font-size: 60px;
    line-height: 50px;
  }
  @media (max-width: 900px) {
    font-size: 30px;
    line-height: 50px;
  }
`

export const StyledLink3 = styled.a`
  background: #446844;
  width: auto;

  color: #ffffff;
  cursor: pointer;
  /* max-width: 455px; */
  text-decoration: none;
  border: 3px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  /* max-height: 77px; */
  margin-top: 4rem;
  padding: 1.5rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 20px;
  letter-spacing: 0.1em;
  text-align: center;

  box-sizing: border-box;
  @media (max-width: 1326px) {
    font-size: 1rem;
    max-width: 15rem;
  }
  &:hover {
    background: #ffffff;
    color: #446844;
  }
`
