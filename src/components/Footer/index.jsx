import { memo } from "react";
import * as S from "./styles";
import Logo_BLANCO from "../../assets/images/Logo_BLANCO.png";
import FC from "../../assets/images/FC.png";
import ig from "../../assets/images/ig.png";
import inst from "../../assets/images/inst.png";

const Footer = () => {
  return (
    <S.FooterContainer>
      {/* //---------Container1------------- */}
      <S.Container1>
        <S.InfoWrap>
          <S.Logo>
            <img src={Logo_BLANCO} alt="" />
          </S.Logo>

          <S.Hour>
            Nos complace la idea de <br />
            que exista la posibilidad <br />
            de poder comenzar una <br />
            relación comercial.
          </S.Hour>
          <S.Media>
            <S.MediaLogo>
              <img src={FC} alt="" />
            </S.MediaLogo>
            <S.MediaLogo>
              <img src={ig} alt="" />
            </S.MediaLogo>
            <S.MediaLogo>
              <img src={inst} alt="" />
            </S.MediaLogo>
          </S.Media>
        </S.InfoWrap>
      </S.Container1>
      {/* //---------Container2------------- */}
      <S.Container2>
        <S.NavWrap>
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
        </S.NavWrap>
        <S.InfoWrap>
          <S.Ubi>
           <b> FRIOSUR S.C.A.</b> <br />
            Pol. Industrial “El Manchon”,
            <br />
            c/ San Roque 40,
            <br /> 41940 Tomares, Sevilla.
          </S.Ubi>
        </S.InfoWrap>
      </S.Container2>
      {/* //---------Container3------------- */}{" "}
      <S.Container3>
        <S.NavWrap>
          <S.Navbar>
            <S.NavLink>
              <S.Link>POLITICA DE PRIVACIDAD</S.Link>
            </S.NavLink>
            <S.NavLink>
              <S.Link>POLITICA DE COOKIES</S.Link>
            </S.NavLink>
            <S.NavLink>
              <S.Link>AVISO LEGAL</S.Link>
            </S.NavLink>
            <S.NavLink>
              <S.Link>CONTACTO</S.Link>
            </S.NavLink>
          </S.Navbar>
        </S.NavWrap>
        {/* --------------//--INFO2-- --------*/}
        <S.InfoWrap>
          <S.Hour>
            Horarios de oficinas,de lunes a viernes,
            <br />
            de 8:00 a 13:30 y de 16:00 a 19:00. <br />
            <br />
            954 156 725 / 959 302 314 (Sevilla / Huelva). <br />{" "}
            info@friosursca.com
          </S.Hour>
        </S.InfoWrap>
      </S.Container3>
    </S.FooterContainer>
  );
};

export default memo(Footer);
