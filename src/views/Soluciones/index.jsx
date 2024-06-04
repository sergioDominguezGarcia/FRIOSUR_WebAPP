import { memo } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import DoubleSection from '../../components/DoubleSection'
import solutionsImg from '../../assets/images/solutionsImg.png'
import Section2img from '../../assets/images/Section2img.png'
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
              <S.Tittle bold> SERVICIOS </S.Tittle>
              <S.SeparatorWhite />
              <S.A>
                <b>OptimizadOs para tu negocio, servicio 24/7</b>
              </S.A>
            </S.Text>
          </S.Box4>
        </S.SectionBackground>

        {/* <--------SECTION 2 -------> */}
        <S.Section>
          <S.Box6>
            <S.Text>
              <S.H2Green bold>
                SOLUCIONES DE <br /> CLIMATIZACIÓN INDUSTRIAL
              </S.H2Green>
            </S.Text>
          </S.Box6>
        </S.Section>
        {/* <--------SECTION img-------> */}
        <S.SectionBackground2 background={Section2img}>
          <S.Box4>
            <S.Text2>
              <S.H1solutions bold>
                {' '}
                Ofrecemos servicios completos de climatización para empresas de
                todos los tamaños, incluyendo:{' '}
              </S.H1solutions>
              
              <S.H2solutions>
                <b>
                  Instalación y diseño de aire acondicionado Sistemas HVAC
                  comerciales Refrigeración industrial de aire
                </b>
              </S.H2solutions>
            </S.Text2>
          </S.Box4>
        </S.SectionBackground2>

        {/* <--------Sphere section -------> */}
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

        <S.Section3>
          <S.BoxSolutions>
            <S.H1solutions>NOS ENCARGAMOS DE:</S.H1solutions>
            <S.Text>
              <S.List>
                <S.Li>
                  Las maniobras necesarias del autómata, que cumpa con la
                  legislación actual
                </S.Li>
                <S.Li>Compresores</S.Li>
                <S.Li>Evaporadores</S.Li>
                <S.Li>Tuberías</S.Li>
                <S.Li>Valvulería</S.Li>
                <S.Li>Paneles frigoríficos</S.Li>
                <S.Li>Puertas</S.Li>
                <S.Li>
                  Maniobras necesarias del automata, que cumpla con la
                  legislación actual.
                </S.Li>
              </S.List>
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
