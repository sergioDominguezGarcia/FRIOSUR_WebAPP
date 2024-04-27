import { memo, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import Logo_FRIOSUR from "../../assets/images/Logo_FRIOSUR.png";
const HeaderContact = () => {
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

  const navigate = useNavigate();
  const handleGoToHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const handleGoToSolutions = useCallback(() => {
    navigate("/solutions");
  }, [navigate]);

  const handleGoToContact = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <S.HeaderContainer isScrolled={isScrolled}>
      <S.Logo>
        <img src={Logo_FRIOSUR} alt="" onClick={handleGoToHome} />
      </S.Logo>

      <S.Navbar>
        <S.NavLink>
          <S.Link onClick={handleGoToHome}>INICIO</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link onClick={handleGoToSolutions}>SOLUCIONES</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link>FRIOSUR</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link onClick={handleGoToContact}>CONTACTO</S.Link>
        </S.NavLink>
      </S.Navbar>
    </S.HeaderContainer>
  );
};

export default memo(HeaderContact);
