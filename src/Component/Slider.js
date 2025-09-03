import BackgroundSlider from './BackgroundSlider';
import { Link } from "react-router-dom";
import '../index.css';

// Import all 8 images
import image1 from '../Assets/bgcolors/image1.jpg';
import image2 from '../Assets/newImages/s2.JPG';
import image3 from '../Assets/newImages/s3.JPG';
import image4 from '../Assets/newImages/s4.JPG';
import image5 from '../Assets/newImages/s5.JPG';
import image6 from '../Assets/newImages/s6.JPG';
import image7 from '../Assets/newImages/s7.JPG';
import image8 from '../Assets/newImages/s8.JPG';


export default function Slider() {
  return (
    <div style={{ display: "block" }}>
      {/* Pass all images into one BackgroundSlider */}
      <BackgroundSlider 
        images={[image1, image2, image3, image4, image5, image6, image7, image8]} 
        duration={3}      // each image shows for 7 seconds
        transition={1}    // fade transition time
        blur={0}          // optional blur
      />

      <div className="bgslider">
        <div className="justify-content-md-center maincontent">
          <font>Official Music Club of</font>
        </div>     
        <div className="justify-content-md-center maincontent">
          <font>PSG College of Technology</font>
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
