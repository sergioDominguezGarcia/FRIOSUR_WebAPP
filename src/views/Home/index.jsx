import { memo } from 'react'
import * as S from '../styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import background from '../../assets/images/background.png'
import FlipCard from '../../components/FlipCard'
import climate from '../../assets/images/climate.png'
import maintenance from '../../assets/images/maintenance.png'
import snowflake from '../../assets/images/snowflake.png'
import map from '../../assets/images/map.png'
import Line from '../../assets/images/Line.png'
import clients from '../../assets/images/clients.png'
import reseña from '../../assets/images/reseña.png'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const handleGoToContact = () => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }
  return (
    <S.HomeContainer>
      <Header />
      <S.Content>
        {/* <--------SECTION 1 -------> */}
        <S.SectionWithBackground background={background}>
          <S.Box>
            {/* <S.A>Frío Industrial | Mantenimiento</S.A>  */}
            <S.TextBox>
              <S.Tittle> LA </S.Tittle>
              <S.Tittle bold> SOLUCIÓN </S.Tittle>
              <S.Tittle>QUE MEJOR</S.Tittle>
              <S.Tittle>SE ADAPTA A</S.Tittle>
              <S.Tittle bold> TU NEGOCIO </S.Tittle>
            </S.TextBox>
          </S.Box>
          <S.Box2>
            <S.TextBoxR>
              <S.StyledLink>SABER MÁS</S.StyledLink>
              <S.A>
                Enfocados en el <b>sector Alimentario</b>
                <br />
                <br />
                También abarcamos otros mercados, ya sea a nivel
                <b> Comercial </b> o <b> Industrial </b>
              </S.A>
            </S.TextBoxR>
          </S.Box2>
        </S.SectionWithBackground>

        {/* <--------SECTION 2 -------> */}
        <S.Section>
          <S.UpperRow>
            <S.Box3>
              <FlipCard
                headerContent={
                  <>
                    <S.H2>FRÍO INDUSTRIAL</S.H2>
                    <img src={snowflake} width="200rem" alt="" />
                  </>
                }
                frontContent={
                  <S.ABox>
                    <S.Acard>
                      Nos enorgullecemos de ofrecer las{' '}
                      <b>mejores soluciones </b>de{' '}
                      <b>refrigeración industrial</b> del mercado, respaldadas
                      por una amplia <b>experiencia de más de 30 años</b> que,
                      junto con nuestro equipo de personas
                      <b> cualificadas,</b> tenemos un{' '}
                      <b>compromiso inquebrantable con la excelencia.</b>
                    </S.Acard>
                  </S.ABox>
                }
                backContent={
                  <S.ABox>
                    <S.Acard>
                      Somos{' '}
                      <b>líderes en diseño, instalación y mantenimiento</b> de
                      <b>
                        instalaciones frigoríficas industriales, cámaras de
                        congelación, túneles de enfriamiento y sistemas de
                        refrigeración para salas de manipulación.
                      </b>
                    </S.Acard>
                  </S.ABox>
                }
              />
            </S.Box3>
            <S.Box3>
              <FlipCard
                headerContent={
                  <>
                    <S.H2>FRÍO COMERCIAL Y CLIMA</S.H2>
                    <img src={climate} width="200rem" alt="" />
                  </>
                }
                frontContent={
                  <S.ABox>
                    <S.Acard>
                      Ofrecemos las mejores soluciones en Climatización y Frío
                      Comercial para supermercados e hipermercados, respaldadas
                      por nuestra amplia experiencia en el sector.
                    </S.Acard>
                  </S.ABox>
                }
                backContent={
                  <S.ABox>
                    <S.Acard>
                      Nos comprometemos con la eficiencia energética y el uso de
                      gases refrigerantes naturales, como el CO2 y el amoniaco,
                      mediante un constante enfoque en la formación y la
                      innovación.
                    </S.Acard>
                  </S.ABox>
                }
              />
            </S.Box3>
          </S.UpperRow>
          <S.BottomRow>
            <S.Box5>
              <S.H2>MANTENIMIENTO</S.H2>
              <img src={maintenance} width="200rem" alt="" />
              <S.ABox>
                <S.A>
                  Asistencia técnica <b>24 horas</b> al día <b>365 días</b> del
                  año
                </S.A>
              </S.ABox>
            </S.Box5>
          </S.BottomRow>
        </S.Section>
        {/* <--------SECTION 3 -------> */}
        <S.Section3>
          <S.Boxx>
            <S.StyledLink2>SOLUCIONES</S.StyledLink2>
            <S.H2Green>POSICIONAMIENTO</S.H2Green>
            <img src={map} width="95%" alt="" />
            <S.Img>
              <img src={Line} width="100%" alt="" />
            </S.Img>
          </S.Boxx>
          <S.Boxx>
            <S.H1>CLIENTES</S.H1>
            <S.HBox>
              <S.H2Green>Que confian en </S.H2Green>
              <S.H2Green bold="600"> FRIOSUR</S.H2Green>
              <S.H2Green>y reseñas de intalaciones</S.H2Green>
            </S.HBox>
            <img src={clients} width="100%" alt="" />
          </S.Boxx>
          {/* <--------SECTION 4 -------> */}
          <S.Boxx>
            <img src={reseña} width="95%" alt="" />
          </S.Boxx>

          {/* <--------SECTION 5 -------> */}
          <S.Boxx>
            <S.HBox>
              <S.H2Green bold="600"> CONTACTA </S.H2Green>
              <S.H2Green>HOY MISMO CON NOSOTROS Y PIDE </S.H2Green>
              <S.H2Green bold="600"> MÁS INFORMACIÓN</S.H2Green>
            </S.HBox>
            <S.StyledLink onClick={handleGoToContact}>INFORMACIÓN</S.StyledLink>
            <br />
            <br />
          </S.Boxx>
        </S.Section3>
      </S.Content>
      <Footer />
    </S.HomeContainer>
  )
}

export default memo(Home)