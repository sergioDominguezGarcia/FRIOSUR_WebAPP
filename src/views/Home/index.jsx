import { memo } from "react";
import * as S from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Home = () => {
 
  return (
    <S.HomeContainer>
      <Header />
      <Footer />
    </S.HomeContainer>
  );
};

export default memo(Home);
