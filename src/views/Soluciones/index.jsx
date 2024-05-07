import { memo } from 'react'
import * as S from '../styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import solutionsImg from '../../assets/images/solutionsImg.png'
import Mask from '../../assets/images/Mask.png'
import { useNavigate } from 'react-router-dom'

const Solutions = () => {
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
        <S.SectionBackground background={solutionsImg}>
          <S.Box4>
            <S.Text>
              <S.Tittle bold> SOLUCIONES </S.Tittle>
              <S.A>Optimizadas para tu negocio, servicio 24/7</S.A>
            </S.Text>
          </S.Box4>
        </S.SectionBackground>

        {/* <--------SECTION 2 -------> */}
        <S.Section>
          <S.Box6>
            <S.Text>
              <S.Tittle bold>CONSULTORÍA TÉCNICA</S.Tittle>
              <S.List>
                <S.Li>
                  Evita <b>roturas</b> de válvulas, <b>fugas</b> de gas
                  refrigerante,
                  <b> derivación</b> de resistencias eléctricas,
                  <b> sobre tensión </b>en bobinados de compresores, etc...
                </S.Li>
                <S.Li>
                  Estas cámaras de refrigeración funcionan 24 horas al día, así
                  que al<b> trabajar con constantes cambios</b> de presión y de
                  estados de gases en los circuitos frigoríficos, están
                  afectadas por continuas <b>vibraciones y fuerzas.</b>
                </S.Li>
              </S.List>
              <S.H2Box>
                <S.H2>
                  ¡¡Esto va a provocar el desgaste de tu instalación!!
                </S.H2>
              </S.H2Box>
            </S.Text>
          </S.Box6>

          <S.Section3>
            <S.Boxx></S.Boxx>
            <S.Boxx></S.Boxx>
            <S.Boxx></S.Boxx>
            <S.Boxx></S.Boxx>
          </S.Section3>

          <S.Box6>
            <S.Text>
              <S.Tittle bold>A MODO DE EJEMPLO...</S.Tittle>
              <S.A></S.A>
              <S.H2Box>
                <S.H2>Aunque sólo tienes una nave vacía</S.H2>
              </S.H2Box>
            </S.Text>
          </S.Box6>
        </S.Section>
      
        <S.Section3>
          <S.Boxx>
            <S.H1>NOS ENCARGAMOS DE:</S.H1>
            <S.Text>
              <S.List2>
                <S.Li2>Compresores</S.Li2>
                <S.Li2>Evaporadores</S.Li2>
                <S.Li2>Tuberías</S.Li2>
                <S.Li2>Valvulería</S.Li2>
                <S.Li2>Paneles frigoríficos</S.Li2>
                <S.Li2>Puertas</S.Li2>
                <S.Li2>
                  Maniobras necesarias del automata, que cumpla con la
                  legislación actual.
                </S.Li2>
              </S.List2>
  
            </S.Text>
          </S.Boxx>
          <S.Boxx>
            <S.H1 >MANTENIMIENTO</S.H1>
            <S.Text>
              <S.H2Green>
                Una solución optimizada para tu negocio, un servicio 24/7, que
                te asegura la conservación de tu género y que no pierdas dinero
                cuando estos cambios ocurran.
              </S.H2Green>
              <S.Img>
                <img src={Mask} alt="" />
              </S.Img>
              <S.StyledLink2 onClick={handleGoToContact}>
                CONTACTAR AHORA
              </S.StyledLink2>
            </S.Text>
          </S.Boxx>

        
        </S.Section3>
      </S.Content>
      <Footer />
    </S.HomeContainer>
  )
}

export default memo(Solutions)
