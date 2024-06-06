import { memo } from "react";
import * as S from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import mapa from "../../assets/images/mapa.png";
import ContactUs from "../../components/ContactoForm";

const Contact = () => {
  return (
    <>
      <S.ContactContainer>
        <Header />
        <S.Content>
          <S.H1>CONTACTA HOY MISMO</S.H1>
          <S.TextWrap>
            <S.Column1>
              <S.Text>
                <b> FRIOSUR S.C.A.</b> <br />
                Pol. Industrial “El Manchon”,
                <br />
                c/ San Roque 40,
                <br /> 41940 Tomares, Sevilla.
              </S.Text>
              <S.Text>
                Horarios de oficinas,de{" "}
                <b>
                  lunes a viernes,
                  <br />
                  de 7:30 a 15:30.{" "}
                </b>
                <br />
                <br />
                954 156 725 / 959 302 314 (Sevilla / Huelva). <br />{" "}
                info@friosursca.com
              </S.Text>
              <S.Text>
                Nos complace la idea de <br />
                que exista la posibilidad
                <br />
                de poder comenzar una <br />
                relación comercial.
              </S.Text>
            </S.Column1>
            <S.Column2>
              <S.Text>
                Para más información, sobre{" "}
                <b>
                  Frío Industrial,
                  <br /> Mantenimiento y Refrigeración Industrial, <br />
                </b>
                 rellena el              
                siguiente formulario. Estaremos <b>encantados de ayudarte.</b>
              </S.Text>
            <ContactUs />

            </S.Column2>
          </S.TextWrap>

          <S.Map>
            <img src={mapa} alt="" />
          </S.Map>
        </S.Content>
        <Footer />
      </S.ContactContainer>
    </>
  );
};

export default memo(Contact);
