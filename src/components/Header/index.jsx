import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Logo_FRIOSUR from '../../assets/images/Logo_FRIOSUR.png'
// import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {
  // Change color when scrolling
  // const [menuOpen, setMenuOpen] = useState(false)
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

    // const toggleMenu = () => {
    //   setMenuOpen(!menuOpen)
    // }

    //   const closeMenu = () => {
    //     setMenuOpen(false)
    //   }
  return (
    <S.Header>
      <S.HeaderContent>
        <S.Logo>
          <img src={Logo_FRIOSUR} width alt="" onClick={handleGoToHome} />
        </S.Logo>

        {/* <S.HamburgerIcon onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </S.HamburgerIcon> */}

        <S.Navbar
        // menuOpen={menuOpen}
        >
          {/* <S.CloseIcon onClick={closeMenu} /> */}
          <S.NavLink>
            <S.Link onClick={handleGoToHome}>INICIO</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link onClick={handleGoToSolutions}>SERVICIOS</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link onClick={handleGoToFriosur}>EMPRESA</S.Link>
          </S.NavLink>
          <S.NavLink>
            <S.Link onClick={handleGoToContact}>CONTACTO</S.Link>
          </S.NavLink>
        </S.Navbar>
      </S.HeaderContent>
    </S.Header>
  )
}

export default memo(Header)
