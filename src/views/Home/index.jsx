import { memo } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import background from '../../assets/images/background.png'
import climate from '../../assets/images/climate.png'
import maintenance from '../../assets/images/maintenance.png'
import snowflake from '../../assets/images/snowflake.png'

const Home = () => {
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
          <S.Box>
            <S.StyledLink>SABER MÁS</S.StyledLink>
            <S.A>
              Enfocados en el <b>sector Alimentario</b>
              <br />
              <br />
              También abarcamos otros mercados, ya sea a nivel
              <b> Comercial </b> o <b> Industrial </b>
            </S.A>
          </S.Box>
        </S.SectionWithBackground>

        {/* <--------SECTION 2 -------> */}
        <S.Section>
          <S.UpperRow>
            <S.Box3>
              <S.H2>FRÍO</S.H2>
              <img src={snowflake} width="200rem" alt="" />
              <S.ABox>
                <S.A>
                  <b>Analizar y solventar </b>problemas de{' '}
                  <b>diseños y mantenimiento</b> de instalaciones de
                  refrigeración industrial <b>nos permite dar soluciones </b>{' '}
                  más <br />
                  <b>profesionales y ajustadas del mercado.</b>
                </S.A>
              </S.ABox>
            </S.Box3>
            <S.Box3>
              <S.H2>CLIMA</S.H2>
              <img src={climate} width="200rem" alt="" />
              <S.ABox>
                <S.A>
                  <b>Estudio, diseño, ejecución </b>y<b> puesta en marcha </b>
                  de instalaciones de{' '}
                  <b>aire acondicionado, climatización COMERCIAL </b>y
                  refrigeración de aire a<b> nivel INDUSTRIAL.</b>
                </S.A>
              </S.ABox>
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
        <S.Section></S.Section>
        {/* <--------SECTION 4 -------> */}
        <S.Section></S.Section>
        {/* <--------SECTION 5 -------> */}
        <S.Section></S.Section>
      </S.Content>
      <Footer />
    </S.HomeContainer>
  )
}

export default memo(Home)
