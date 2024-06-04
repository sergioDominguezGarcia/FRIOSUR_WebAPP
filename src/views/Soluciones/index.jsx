import { memo } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DoubleSection from '../../components/DoubleSection'
import solutionsImg from '../../assets/images/solutionsImg.png'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'
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
              <S.SeparatorWhite />
              <S.A>
                <b>Optimizadas para tu negocio, servicio 24/7</b>
              </S.A>
            </S.Text>
          </S.Box4>
        </S.SectionBackground>

        {/* <--------SECTION 2 -------> */}
        <S.Section>
          <S.Box6>
            <S.Text>
              <S.H2 bold>CONSULTORÍA TÉCNICA</S.H2>
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
                  <b>¡¡Esto va a provocar el desgaste de tu instalación!!</b>
                </S.H2>
              </S.H2Box>
            </S.Text>
          </S.Box6>
        </S.Section>

        <S.SphereSection>
          <DoubleSection
            leftContent={
              <S.Text>
                <S.Atitle mode="mode1">ESTUDIO TÉCNICO</S.Atitle>
                <S.Agreen mode="mode1">
                  Nuestro enfoque se centra en garantizar el mayor rendimiento y
                  fiabilidad de los sistemas. Estamos capacitados para
                  implementar los nuevos gases refrigerantes tipo A2L, a gases
                  naturales, como el amoniaco, CO2 y glicoles. Ofrecemos
                  soluciones personalizadas para cada diseño y cálculo de
                  sistemas frigoríficos, adaptados a las necesidades de cada
                  cliente.
                </S.Agreen>
              </S.Text>
            }
            rightContent={
              <>
                <img src={img1} width="300px" alt="" />
              </>
            }
            mode="mode1"
          />
          <DoubleSection
            leftContent={
              <>
                <img src={img2} width="300px" alt="" />
              </>
            }
            rightContent={
              <S.Text>
                <S.Atitle mode="mode2">ESTUDIO TÉCNICO</S.Atitle>
                <S.Agreen mode="mode2">
                  En Friosur, nos destacamos por ofrecer los mejores montajes de
                  instalaciones frigoríficas por varias razones. Contamos con un
                  equipo altamente cualificado y experimentado, que garantiza
                  una ejecución precisa y eficiente en cada proyecto. Nos
                  esforzamos por ofrecer montajes que destacan por su excelencia
                  en cada aspecto: desde la planificación hasta la
                  implementación, siempre asegurando la máxima eficiencia y
                  rendimiento.
                </S.Agreen>
              </S.Text>
            }
            mode="mode2"
          />
          <DoubleSection
            leftContent={
              <S.Text>
                <S.Atitle mode="mode1">PUESTA EN MARCHA</S.Atitle>
                <S.Agreen mode="mode1">
                  Nuestro equipo de expertos no solo se encarga de instalar los
                  sistemas con precisión, sino que también realiza pruebas
                  exhaustivas para garantizar un funcionamiento óptimo desde el
                  inicio del ciclo de una instalación. Además, ofrecemos un
                  servicio de seguimiento post-instalación para asegurarnos a
                  largo plazo. En Friosur nos comprometemos a superar las
                  expectativas de nuestros clientes en cada proyecto, brindando
                  puestas en marcha que son sinónimo de calidad y confiabilidad.
                </S.Agreen>
              </S.Text>
            }
            rightContent={
              <>
                <img src={img3} width="300px" alt="" />
              </>
            }
            mode="mode1"
          />
          <DoubleSection
            leftContent={
              <>
                <img src={img4} width="300px" alt="" />
              </>
            }
            rightContent={
              <S.Text>
                <S.Atitle mode="mode2">MANTENIMIENTO</S.Atitle>
                <S.Agreen mode="mode2">
                  En Friosur, nos destacamos por ofrecer los mejores montajes de
                  instalaciones frigoríficas por varias razones. Contamos con un
                  equipo altamente cualificado y experimentado, que garantiza
                  una ejecución precisa y eficiente en cada proyecto. Nos
                  esforzamos por ofrecer montajes que destacan por su excelencia
                  en cada aspecto: desde la planificación hasta la
                  implementación, siempre asegurando la máxima eficiencia y
                  rendimiento.
                </S.Agreen>
              </S.Text>
            }
            mode="mode2"
          />
        </S.SphereSection>

        <S.Section>
          <S.Box6>
            <S.Text>
              <S.Tittle bold>A MODO DE EJEMPLO...</S.Tittle>
              <S.H2Box>
                <S.A>
                  Necesitas 5 cámaras para la conservación de producto a +2ºC.
                  Además necesitarás dos túneles de congelados, donde el
                  producto entrará y deberá salir ultra congelado a -20ºC en dos
                  horas.
                </S.A>
                <S.H2>Aunque sólo tienes una nave vacía</S.H2>
                <S.A>
                  Nostros nos encagamos de todo, concretamos una reuníon,
                  tomamos medidas del sitio, definimos de forma exaustiva tu
                  método de trabajo y nos adaptamos a ello.
                </S.A>
                <S.A>
                  Diseñamos la instalación frigorífica necesaria y hacemos un
                  estudio de tu negocio, para optimizar al máximo el rendimeinto
                  de tu espacio.{' '}
                </S.A>
                <S.A>
                  Esto te asegura un entorno totalmente funcional y preparado
                  para el volumen de trabajo que asumes.
                </S.A>
              </S.H2Box>
            </S.Text>
          </S.Box6>
        </S.Section>
        <S.Section3>
          <S.BoxSolutions>
            <S.H1solutions>NOS ENCARGAMOS DE:</S.H1solutions>
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
          </S.BoxSolutions>
          <S.BoxSolutions>
            <S.H1solutions>MANTENIMIENTO</S.H1solutions>
            <S.Text>
              <S.H2solutions>
                Una solución optimizada para tu negocio, un servicio 24/7, que
                te asegura la conservación de tu género y que no pierdas dinero
                cuando estos cambios ocurran.
              </S.H2solutions>
              <S.Img2>
                <img src={Mask} alt="" />
              </S.Img2>
              <S.StyledLink4 onClick={handleGoToContact}>
                CONTACTAR AHORA
              </S.StyledLink4>
            </S.Text>
          </S.BoxSolutions>
        </S.Section3>
      </S.Content>
      <Footer />
    </S.HomeContainer>
  )
}

export default memo(Solutions)
