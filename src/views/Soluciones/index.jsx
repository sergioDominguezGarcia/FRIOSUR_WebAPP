import { memo } from "react";
import * as S from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Soluciones from "../../assets/images/Soluciones.png";

const Solutions = () => {
 
  return (
    <S.Container>
      <Header />

      <S.Back>
        <img src={Soluciones} alt="" />
      </S.Back>
      <Footer />
    </S.Container>
  );
};

export default memo(Solutions);
