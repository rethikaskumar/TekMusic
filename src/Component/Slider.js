import BackgroundSlider from './BackgroundSlider';
import { Link } from "react-router-dom";
import '../index.css';
import image2 from '../Assets/Images/slider2.jpg';
import image3 from '../Assets/Images/slider3.jpg';

export default function Slider(){
    return(
        <div style={{display:"block"}}>
          <BackgroundSlider images={[image2, image3]} duration={7} transition={1} blur={0}/>
          <div className="bgslider">
            <div className="justify-content-md-center maincontent"><font>Official Music Club of</font></div>     
            <div className="justify-content-md-center maincontent"><font>PSG College of Technology</font></div>     
            <Link to="/Talenthunt" className='fontjoin'>
              <button className="button text-bt-2">
                JOIN NOW
              </button>
            </Link>              
          </div>
        </div>
    )
}