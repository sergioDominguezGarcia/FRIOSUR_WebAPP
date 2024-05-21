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
                  de 8:00 a 13:30 y de 16:00 a 19:00.{" "}
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
                  <br /> Mantenimiento y Refrigeración Industrial,
                </b>{" "}
                rellena el
                <br />
                siguiente formulario. Estaremos <b>encantados de ayudarte.</b>
              </S.Text>
            <ContactUs />
              {/* <S.FormContact>      
              </S.FormContact> */}

              {/* <S.MailForm>
                <S.InputWrap>
                  <S.Input placeholder="NOMBRE"></S.Input>
                  <S.Input placeholder="EMAIL"></S.Input>
                </S.InputWrap>
                <S.TextArea placeholder="MENSAJE..."></S.TextArea>
                <label>
                  <input type="checkbox" id="cbox1" value="first_checkbox" />{" "}
                  Acepto los términos y condiciones legales
                </label>
                <S.CustomButton>ENVIAR</S.CustomButton>
            </S.MailForm> */}
            </S.Column2>
          </S.TextWrap>

          <S.Map>
            <img src={mapa} alt="" />
          </S.Map>
        {/* <Footer /> */}
        </S.Content>
      </S.ContactContainer>
    </>
  );
};

export default memo(Contact);
