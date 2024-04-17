import Img1 from '../../images/icon-sedans.svg'
import Img2 from '../../images/icon-suvs.svg'
import Img3 from '../../images/icon-luxury.svg'
import Icon from '../Icon/Icon'
import Titulo from '../Titulo/Titulo'
import Texto from '../Texto/Texto'
import Button from '../Button/Button'
import './App.css'

const App = ({border}) => {
    return(
        <>
        <div className='container-principal'>
        <div className='container-1'>
         <Icon img={Img1}/>
         <Titulo title="SEDANS"/>
         <Texto texto="These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens." />
         <Button text="Learn More" color="hsl(31, 77%, 52%)"/>
         </div>

         <div className='container-2'>
         <Icon img={Img2}/>
         <Titulo title="SUVS"/>
         <Texto texto="These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens." />
         <Button text="Learn More" color="hsl(184, 100%, 22%)"/>
         </div>

         <div className='container-3'>
         <Icon img={Img3}/>
         <Titulo title="LUXURY"/>
         <Texto texto="These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens." />
         <Button text="Learn More" color="hsl(179, 100%, 13%)"/>
         </div>
         </div>

        </>
    )
}

export default App;