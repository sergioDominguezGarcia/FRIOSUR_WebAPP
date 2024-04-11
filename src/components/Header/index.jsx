import { memo } from "react";
import * as S from "./styles";
import Logo_BLANCO from "../../assets/images/Logo_BLANCO.png"
const Header = () => {
  return (
    <S.HeaderContainer>        
      <S.NavbarLogo>
          <img src={Logo_BLANCO} alt="" />
      </S.NavbarLogo>
      <S.Navbar>

          
        
        <S.NavbarLinks>
          <S.Link>INICIO</S.Link>
          <S.Link>SOLUCIONES</S.Link>
          <S.Link>FRIOSUR</S.Link>
          <S.Link>CONTACTO</S.Link>
        </S.NavbarLinks>
      </S.Navbar>
    </S.HeaderContainer>
  );
};

export default memo(Header);
