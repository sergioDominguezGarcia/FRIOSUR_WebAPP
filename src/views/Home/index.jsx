import { memo, useEffect, useState } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import background from '../../assets/images/background.png'
import FlipCard from '../../components/FlipCard'
import climate from '../../assets/images/climate.png'
import maintenance from '../../assets/images/maintenance.png'
import backHome from '../../assets/images/backHome.png'
import snowflake from '../../assets/images/snowflake.png'
import Line from '../../assets/images/Line.png'
import Slider from '../../components/Slider'
import reseña from '../../assets/images/reseña.png'
import { useNavigate } from 'react-router-dom'
import MapComponent from '../../components/Map'
import './styles.css'
const Home = () => {
  const navigate = useNavigate()
  const handleGoToContact = () => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <S.HomeContainer>
      <Header />
      <S.Content>
        {/* <--------SECTION 1 -------> */}
        <S.SectionWithBackground background={background}>
          <S.Box>
            <S.TextBox className={animate ? 'animate-slideInFromLeft' : ''}>
              <S.Tittle>
                {' '}
                LA
                <S.Tittle bold> SOLUCIÓN </S.Tittle>
              </S.Tittle>
              <S.Tittle> QUE MEJOR</S.Tittle>
              <S.Tittle> SE ADAPTA A</S.Tittle>
              <S.Tittle bold> TU NEGOCIO </S.Tittle>
            </S.TextBox>
          </S.Box>
          <S.Box2>
            <S.TextBoxR className={animate ? 'animate-slideInFromLeft' : ''}>
              <S.StyledLink>SABER MÁS</S.StyledLink>
              <S.A>
                Enfocados en el <b>sector Alimentario</b>  También abarcamos otros mercados,
                ya sea a nivel
                <b> Comercial </b> o <b> Industrial </b>
              </S.A>
            </S.TextBoxR>
          </S.Box2>
        </S.SectionWithBackground>

        {/* <--------SECTION 2 -------> */}
        <S.Section>
          <S.UpperRow>
            <S.Box3>
              <S.CardBox>
                <FlipCard
                  headerContent={
                    <>
                      <S.H2g>FRÍO INDUSTRIAL</S.H2g>
                      <img
                        src={snowflake}
                        width="100px"
                        alt="Icono de copo de nieve"
                      />
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
              </S.CardBox>
            </S.Box3>
            <S.Box4>
              <FlipCard
                headerContent={
                  <>
                    <S.H2g>
                      FRÍO COMERCIAL <br /> Y CLIMA
                    </S.H2g>
                    <img src={climate} width="100px" alt="Icono de clima" />
                  </>
                }
                frontContent={
                  <S.ABox2>
                    <S.Acard>
                      Ofrecemos las <b>mejores soluciones</b> en{' '}
                      <b>Climatización y Frío Comercial </b>
                      para supermercados e hipermercados, respaldadas por
                      nuestra amplia <b>experiencia en el sector.</b>
                    </S.Acard>
                  </S.ABox2>
                }
                backContent={
                  <S.ABox>
                    <S.Acard>
                      Nos comprometemos con la <b>eficiencia energética</b> y el
                      uso de
                      <b>
                        gases refrigerantes naturales, como el CO2 y el
                        amoniaco,
                      </b>
                      mediante un constante enfoque en la formación y la
                      innovación.
                    </S.Acard>
                  </S.ABox>
                }
              />
            </S.Box4>
          </S.UpperRow>
          <S.BottomRow>
            <FlipCard
              headerContent={
                <>
                  <S.H2g>MANTENIMIENTO</S.H2g>
                  <img src={maintenance} width="100px" alt="Icono de clima" />
                </>
              }
              frontContent={
                <S.ABox2>
                  <S.Acard>
                    {' '}
                    <b>Asistencia técnica</b>{' '}
                  </S.Acard>
                </S.ABox2>
              }
              backContent={
                <S.ABox>
                  <S.Acard>
                    {' '}
                    <b>24 horas</b> al día, <b>365</b> días del año.
                  </S.Acard>
                </S.ABox>
              }
            />
          </S.BottomRow>
        </S.Section>
        {/* <--------SECTION 3 -------> */}
        <S.Section3>
          <S.Boxx>
            <S.StyledLink2 href="#solutions">SOLUCIONES</S.StyledLink2>
            {/* <--------MAPA INTERACTIVO -------> */}
            <S.H2Green bold>POSICIONAMIENTO</S.H2Green>

            <MapComponent />

            <S.Img>
              <img src={Line} width="95%" alt="Línea divisoria" />
            </S.Img>
          </S.Boxx>
          <S.Boxx>
            <S.H1>CLIENTES</S.H1>
            <S.HBox>
              <S.H2Green>
                Que confian en </S.H2Green> <br />
              <S.H2Green bold="600"> FRIOSUR </S.H2Green>

            </S.HBox>
            <S.BoxReseña>
              {/* <img
                  src={clients}
                  width="95%"
                  alt="Clientes que confían en Friosur"
                /> */}
              <Slider />
            </S.BoxReseña>
          </S.Boxx>
          <S.SectionWithBackground background={backHome}>
            
              <S.Text>
                <S.Tittle bold> EN CONTINUO DESARROLLO </S.Tittle>
                <S.SeparatorWhite />
                <S.Afrio>
                  <b></b>
                    {' '}
                    Haciendo frente a las nuevas tecnologías que aparecen en el
                    mercado actual
                  
                </S.Afrio>
              </S.Text>
            
          </S.SectionWithBackground>

          {/* <--------SECTION 4 -------> */}
          <S.BoxReseña>
            <img src={reseña} width="70%" alt="Reseñas de clientes" />
          </S.BoxReseña>

          {/* <--------SECTION 5 -------> */}
          <S.Boxx>
            <S.HBox>
              <S.H2Green> <b>CONTACTA </b>  
                HOY MISMO
              CON NOSOTROS Y PIDE  <b> MÁS INFORMACIÓN</b></S.H2Green>
            </S.HBox>
            <S.StyledLink3 onClick={handleGoToContact}>
              MÁS INFORMACIÓN
            </S.StyledLink3>
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
