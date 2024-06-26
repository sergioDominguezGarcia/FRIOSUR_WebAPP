import { memo, useEffect, useState } from 'react'
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

import './styles.css'

const Solutions = () => {
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
        <S.SectionWithBackground background={solutionsImg}>
          <S.Box4>
            <S.Text className={animate ? 'animate-slideInFromLeft' : ''}>
              <S.Tittle bold> SERVICIOS </S.Tittle>
            </S.Text>
            <S.SeparatorWhite
              className={animate ? 'animate-slideInFromLeft' : ''}
            />
            <S.Text className={animate ? 'animate-slideInFromLeft' : ''}>
              <S.A>
                <b>OptimizadOs para tu negocio, servicio 24/7</b>
              </S.A>
            </S.Text>
          </S.Box4>
        </S.SectionWithBackground>

        {/* <--------SECTION 2 -------> */}
        <S.Section>
          <S.Text>
            <S.H2Green bold>
              SOLUCIONES DE <br /> REFRIGERACIÓN INDUSTRIAL
            </S.H2Green>
          </S.Text>
        </S.Section>
        {/* <--------SECTION img-------> */}
        <S.SectionBackground2 background={Section2img}>
          <S.Text2>
            <S.H1solutions bold>
              Ofrecemos servicios integrales de refrigeración industrial para
              diversas industrias, incluyendo:
            </S.H1solutions>
            <S.ContentList>
              <S.H2solutions>
                Diseño e instalación de sistemas de refrigeración:
              </S.H2solutions>
              <S.List>
                x<S.Li>Cámaras de congelación.</S.Li>
                <S.Li>Cámaras de conservación.</S.Li>
                <S.Li>Túneles de congelación y pre enfriamiento rápido.</S.Li>
                <S.Li>Secaderos</S.Li>
                <S.Li>Cámaras de maduración</S.Li>
                <S.Li>Puertas</S.Li>
              </S.List>
              <S.H2solutions>
                Soluciones personalizadas de refrigeración para entornos
                industriales
              </S.H2solutions>
            </S.ContentList>
          </S.Text2>
        </S.SectionBackground2>

        {/* <--------Sphere section -------> */}
        <S.SphereSection>
          <DoubleSection
            leftContent={<div />} // Empty div to utilize ExpandableText
            rightContent={<img src={img1} width="250px" alt="" />}
            mode="mode1"
            leftInitialText={
              <S.Text>
                <S.Atitle mode="mode1">ESTUDIO TÉCNICO</S.Atitle>
                <S.Agreen mode="mode1">
                  Nuestro enfoque se centra en garantizar el mayor rendimiento y
                  fiabilidad de los sistemas. Estamos capacitados para
                  implementar los nuevos gases refrigerantes tipo A2L, a gases
                  naturales, como el amoniaco, CO2 y glicoles.
                </S.Agreen>
              </S.Text>
            }
            leftFullText={
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
          />

          <DoubleSection
            leftContent={<img src={img2} width="250px" alt="" />}
            rightContent={<div />}
            mode="mode"
            rightInitialText={
              <S.Text>
                <S.Atitle mode="mode2">MONTAJE</S.Atitle>
                <S.Agreen mode="mode2">
                  En Friosur, nos destacamos por ofrecer los mejores montajes de
                  instalaciones frigoríficas por varias razones. Contamos con un
                  equipo altamente cualificado y experimentado, que garantiza
                  una ejecución precisa y eficiente en cada proyecto.
                </S.Agreen>
              </S.Text>
            }
            rightFullText={
              <S.Text>
                <S.Atitle mode="mode2">MONTAJE</S.Atitle>
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
          />
          <DoubleSection
            leftContent={<div />} // Empty div to utilize ExpandableText
            rightContent={<img src={img3} width="250px" alt="" />}
            mode="mode1"
            leftInitialText={
              <S.Text>
                <S.Atitle mode="mode1">PUESTA EN MARCHA</S.Atitle>
                <S.Agreen mode="mode1">
                  Nuestro equipo de expertos no solo se encarga de instalar los
                  sistemas con precisión, sino que también realiza pruebas
                  exhaustivas para garantizar un funcionamiento óptimo desde el
                  inicio del ciclo de una instalación. Además, ofrecemos un
                  servicio de seguimiento post-instalación para asegurarnos a
                  largo plazo.
                </S.Agreen>
              </S.Text>
            }
            leftFullText={
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
          />

          <DoubleSection
            leftContent={<img src={img4} width="250px" alt="" />}
            rightContent={<div />}
            rightInitialText={
              <S.Text>
                <S.Atitle mode="mode2">MANTENIMIENTO</S.Atitle>
                <S.Agreen mode="mode2">
                  En Friosur, nos comprometemos a garantizar el funcionamiento
                  óptimo de tus equipos e instalaciones. Realizamos revisiones
                  exhaustivas, con ajustes precisos y limpiezas meticulosa para
                  prevenir cualquier posible fallo, maximizando la eficiencia
                  energética.
                </S.Agreen>
              </S.Text>
            }
            rightFullText={
              <S.Text>
                <S.Atitle mode="mode2">MANTENIMIENTO</S.Atitle>
                <S.Agreen mode="mode2">
                  En Friosur, nos comprometemos a garantizar el funcionamiento
                  óptimo de tus equipos e instalaciones. Realizamos revisiones
                  exhaustivas, con ajustes precisos y limpiezas meticulosa para
                  prevenir cualquier posible fallo, maximizando la eficiencia
                  energética. En caso de incidencias, nuestro equipo técnico
                  altamente capacitado actúa con eficacia para resolver
                  cualquier problema en el menor tiempo posible.
                </S.Agreen>
              </S.Text>
            }
          />
        </S.SphereSection>
        {/* <------- section 3 -------> */}
        <S.Section3>
          <S.BoxSolutions>
            <S.H1solutions>Compromiso de eficacia en</S.H1solutions>
            <S.Text>
              <S.List>
                <S.Li>
                  Diseño y planificación: Desarrollamos un plan detallado que
                  abarca todas las necesidades específicas del cliente,
                  asegurando una integración eficiente y óptima de los sistemas
                  de refrigeración.
                </S.Li>
                <S.Li>
                  Instalación de equipos de refrigeración: Instalamos todos los
                  componentes necesarios para una solución de frío industrial
                  efectiva, incluyendo compresores, evaporadores, condensadores
                  y sistemas de control.
                </S.Li>
                <S.Li>
                  Paneles y puertas frigoríficas: Proveemos e instalamos paneles
                  y puertas frigoríficas de alta calidad para asegurar un
                  aislamiento térmico adecuado y mantener la eficiencia del
                  sistema de refrigeración.
                </S.Li>
                <S.Li>
                  Sistemas de control y monitoreo: Implementamos avanzados
                  sistemas de control y monitoreo para gestionar y supervisar el
                  rendimiento del sistema de refrigeración, asegurando su
                  funcionamiento óptimo y eficiente.
                </S.Li>
                <S.Li>
                  Instalaciones eléctricas: Nos encargamos de las líneas
                  eléctricas necesarias para el funcionamiento seguro y
                  eficiente de los sistemas de refrigeración industrial.
                </S.Li>
                <S.Li>
                  Mantenimiento preventivo y correctivo: Ofrecemos servicios de
                  mantenimiento regular para garantizar la longevidad y
                  eficiencia de los sistemas instalados, así como reparaciones
                  rápidas y efectivas en caso de cualquier eventualidad."
                </S.Li>
              </S.List>
            </S.Text>
          </S.BoxSolutions>
        </S.Section3>
        {/* <------- section 4 -------> */}
        <S.Section>
          <S.BoxSolutions>
            <S.H1solutionsW>
              Garantizamos soluciones profesionales y ajustadas a las
              necesidades de cada cliente.
            </S.H1solutionsW>
          </S.BoxSolutions>
        </S.Section>
        <S.SectionOval>
          <S.Oval>
            <S.H2oval>
              Una solución optimizada para tu negocio, un servicio 24/7, <br />{' '}
              que te asegura la conservación de tu género <br />y garantiza la
              operatividad de tu negocio
            </S.H2oval>
          </S.Oval>
        </S.SectionOval>
        <S.Section>
          <S.Img2>
            <img src={Mask} alt="" />
          </S.Img2>
          <S.H2Green>
            CONTACTA HOY MISMO CON NOSOTROS <br />Y SOLICITA MÁS INFOMACIÓN
          </S.H2Green>
          <S.StyledLink4 onClick={handleGoToContact}>
            CONTACTAR AHORA
          </S.StyledLink4>
        </S.Section>
      </S.Content>
      <Footer />
    </S.HomeContainer>
  )
}

export default memo(Solutions)
