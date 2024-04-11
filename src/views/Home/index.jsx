import { memo } from "react";
import * as S from "./styles";
import Header from "../../components/Header";

const Home = () => {
 
  return (
    <S.HomeContainer>
      <Header />

    </S.HomeContainer>
  );
};

export default memo(Home);
