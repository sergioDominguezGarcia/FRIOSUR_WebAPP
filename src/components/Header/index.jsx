import { memo } from "react";
import * as S from "./styles";
import Logo_BLANCO from "../../assets/images/Logo_BLANCO.png";
const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <img src={Logo_BLANCO} alt="" />
      </S.Logo>

      
      <S.Navbar>
        <S.NavLink>
          <S.Link>INICIO</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link>SOLUCIONES</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link>FRIOSUR</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link>CONTACTO</S.Link>
        </S.NavLink>


      </S.Navbar>
    </S.HeaderContainer>
  );
};

export default memo(Header);
