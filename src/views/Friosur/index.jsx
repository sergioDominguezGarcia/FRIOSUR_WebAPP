import { memo, useEffect, useState } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import back3 from '../../assets/images/back3.png'
import back4 from '../../assets/images/back4.png'
import star from '../../assets/images/star.png'
import imgBottom from '../../assets/images/imgBottom.png'

// import { useNavigate } from 'react-router-dom'

const Friosur = () => {
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
        <S.SectionWithBackground background={back3}>
          <S.Box4>
            <S.Text className={animate ? 'animate-slideInFromLeft' : ''}>
              <S.Tittle bold> EMPRESA </S.Tittle>
              <S.SeparatorWhite />
              <S.A>Enfocados en el frío industrial de tu negocio</S.A>
            </S.Text>
          </S.Box4>
        </S.SectionWithBackground>

        {/* <--------SECTION 2 -------> */}
        <S.Section>
          <S.Box6>
            <S.TextFrio>
              <S.H2 bold>FRIOSUR SCDAD. COOPERATIVA ANDALUZA</S.H2>
              <S.H2Boxfrio>
                <S.Afrio>
                  <b>Friosur</b>, una empresa con mas de 30 años en el sector
                  del <b>Frío Industrial y la Climatización industrial.</b>
                </S.Afrio>

                <S.Afrio>
                  <b>Con sede en Sevilla,</b> nuestra empresa está enfocada en
                  la
                  <b>producción alimenticia.</b>
                </S.Afrio>
              </S.H2Boxfrio>
            </S.TextFrio>
          </S.Box6>
        </S.Section>

        <S.Section3>
          <S.H2Green bold>EN CONTINUO DESARROLLO</S.H2Green>
          <S.Img3>
            <img src={imgBottom} width="50%" alt="" />
          </S.Img3>
          <S.Box6>
            <S.H2Boxfrio>
              <S.Text>
                <S.Agreen>
                  Haciendo frente a las <b>nuevas tecnologías</b> que aparecen
                  en el mercado actual.
                </S.Agreen>
              </S.Text>
              <S.Text>
                <S.Agreen>
                  Gracias a la <b>experiencia adquirida</b> a través de nuestros
                  clientes, <b>Friosur ofrece</b> los{' '}
                  <b>estudios de proyectos</b> eficaces que necesitas.
                </S.Agreen>
              </S.Text>
            </S.H2Boxfrio>
          </S.Box6>
        </S.Section3>
        {/* background imageeeeeeeeeeeeeeeee */}
        <S.SectionWithBackground background={back4}>
          <S.Box4>
            <S.Text>
              <S.Tittle bold> EJECUCIÓN TOTAL </S.Tittle>
              <S.SeparatorWhite />
              <S.Afrio>
                Como la puesta en marcha, revisión y mantenimiento de las
                instalaciones en su <b> nueva obra.</b>
              </S.Afrio>
            </S.Text>
          </S.Box4>
        </S.SectionWithBackground>

        <S.Section3>
          <S.StarBox>
            <S.Text>
              <S.Agreen>
                Contamos con un equipo humano cualificado, trabajando siempre
                con materiales de máxima calidad y con marcas de primer nivel.
              </S.Agreen>
            </S.Text>

            <S.Text>
              <S.Agreen>
                <b>INNOVACIÓN y CALIDAD,</b> valores fundamentales de una
                empresa que apuesta por la máxima competitividad.
              </S.Agreen>
            </S.Text>
            <S.Img4>
              <img src={star} width="45px" alt="" />
            </S.Img4>
            <S.Text>
              <S.Agreen>
                <b>CONTACTA </b>HOY MISMO CON NOSOTROS <br /> Y SOLICITA
                <b> MÁS INFOMACIÓN</b>
              </S.Agreen>
              <S.StyledLink3 onClick={handleGoToContact}>
                MÁS INFORMACIÓN
              </S.StyledLink3>
            </S.Text>
          </S.StarBox>
        </S.Section3>
      </S.Content>
      <Footer />
    </S.HomeContainer>
  )
}

export default memo(Friosur)
