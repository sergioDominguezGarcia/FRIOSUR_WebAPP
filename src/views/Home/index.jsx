import { memo } from "react";
import * as S from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import background from "../../assets/images/background.png";

const Home = () => {
 
  return (
    <S.HomeContainer>
      <Header />
      
      <S.Back>
        <img src={background} alt="" />
      </S.Back>
      <Footer />
    </S.HomeContainer>
  );
};

export default memo(Home);
