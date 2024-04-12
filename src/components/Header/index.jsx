import { memo, useState, useEffect } from "react";
import * as S from "./styles";
import Logo_BLANCO from "../../assets/images/Logo_BLANCO.png";
const Header = () => {

  // Change color when scrolling
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 60) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <S.HeaderContainer isScrolled={isScrolled}>
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
