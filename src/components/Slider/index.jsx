import './styles.css'
import L1 from './logos/L1.png'
import L2 from './logos/L2.png'
import L3 from './logos/L3.png'
import L4 from './logos/L4.png'
import L5 from './logos/L5.png'
import L6 from './logos/L6.png'
import L7 from './logos/L7.png'
import L8 from './logos/L8.png'
import L9 from './logos/L9.png'
import L10 from './logos/L10.png'
import L11 from './logos/L11.png'

export const Slider = () => {
  return (
    <div class="content" >
      
    <div class="logos">
      <div class="logos-slide">
        <img src={L1} alt="logo" />
        <img src={L2} alt="logo" />
        <img src={L3} alt="logo" />
        <img src={L4} alt="logo" />
        <img src={L5} alt="logo" />
        <img src={L6} alt="logo" />
        <img src={L7} alt="logo" />
        <img src={L8} alt="logo" />
        <img src={L9} alt="logo" />
        <img src={L10} alt="logo" />
        <img src={L11} alt="logo" />

      </div>
    </div>
    </div>
  )
}

export default Slider
