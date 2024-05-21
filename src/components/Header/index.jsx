import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Logo_BLANCO from '../../assets/images/Logo_BLANCO.png'
const Header = () => {
  // Change color when scrolling

  const navigate = useNavigate()
  const handleGoToHome = useCallback(() => {
    navigate('/home')
    window.scrollTo(0, 0)
  }, [navigate])

  const handleGoToSolutions = useCallback(() => {
    navigate('/solutions')
    window.scrollTo(0, 0)
  }, [navigate])

  const handleGoToContact = useCallback(() => {
    navigate('/contact')
    window.scrollTo(0, 0)
  }, [navigate])

  const handleGoToFriosur = useCallback(() => {
    navigate('/friosur')
    window.scrollTo(0, 0)
  }, [navigate])

  return (
    <S.Header>
      <S.Logo>
        <img src={Logo_BLANCO} width="80%" alt="" onClick={handleGoToHome} />
      </S.Logo>

      <S.Navbar>
        <S.NavLink>
          <S.Link onClick={handleGoToHome}>INICIO</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link onClick={handleGoToSolutions}>SOLUCIONES</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link onClick={handleGoToFriosur}>FRIOSUR</S.Link>
        </S.NavLink>
        <S.NavLink>
          <S.Link onClick={handleGoToContact}>CONTACTO</S.Link>
        </S.NavLink>
      </S.Navbar>
    </S.Header>
  )
}

export default memo(Header)
