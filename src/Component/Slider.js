import BackgroundSlider from './BackgroundSlider';
import { Link } from "react-router-dom";
import '../index.css';

export default function Slider() {
  return (
    <div style={{ display: "block" }}>
      <BackgroundSlider 
        images={[
          process.env.PUBLIC_URL + "/images/image1.webp",
          process.env.PUBLIC_URL + "/images/s2.webp",
          process.env.PUBLIC_URL + "/images/s3.webp",
          process.env.PUBLIC_URL + "/images/s4.webp",
          process.env.PUBLIC_URL + "/images/s5.webp",
          process.env.PUBLIC_URL + "/images/s6.webp",
          process.env.PUBLIC_URL + "/images/s7.webp"
        ]} 
        duration={3}      // each image shows for 3 seconds
        transition={1}    // fade transition
        blur={0}
      />
      
      <div className="bgslider">
        <div className="justify-content-md-center maincontent text-box">
          Official Music Club of
        </div>     
        <div className="justify-content-md-center maincontent text-box">
          PSG College of Technology
        </div>
    
        <Link to="/Talenthunt" className="fontjoin">
          <button className="button text-bt-2">
            JOIN NOW
          </button>
        </Link>              
      </div>
    </div>
  );
}
