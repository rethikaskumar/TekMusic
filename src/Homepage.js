import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarc from './Component/Navbarc.js';
import Slider from './Component/Slider.js';
import Footer from './Component/Footer.js';
import React from 'react';
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import image1 from './Assets/bgcolors/image1.jpg';
import BackgroundSlider from './Component/BackgroundSlider';
import image2 from './Assets/Images/slider2.jpg';
import image3 from './Assets/Images/slider3.jpg';
import image4 from './Assets/Images/slider7.jpeg';

// Loader CSS override
const override = css`
  display: flex;
  margin: 0 auto;
  border-color: red;
  align-items: center;  
  justify-content: center;
  background: black;
  height: 100%;
  width: 100%;
  position: absolute;
`;

function Loader({ loading }) {
  return (
    <div className="sweet-loading">
      <BackgroundSlider images={[image4]} duration={7200} transition={1} blur={0}/>
      <BackgroundSlider images={[image1]} duration={4} transition={1} blur={5}/>
      <BackgroundSlider images={[image2, image3]} duration={2} transition={1} blur={0}/>
      <ScaleLoader 
        color={'white'} 
        loading={loading} 
        cssOverride={override}   // ✅ FIXED (was css={override})
        height={50} 
        width={5} 
        radius={4} 
        margin={6} 
      />
    </div>
  );
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.makeTimer();
  }
  
  makeTimer() {
    setInterval(() => {
      this.setState({ loading: false });
    }, 4000);
  }

  render() {
    let content = this.state.loading 
      ? <Loader loading={this.state.loading}/> 
      : (
        <div className="App">
          <Slider />
          <Navbarc />
          <Footer />
        </div>
      );

    return <div>{content}</div>;
  }
}

export default Homepage;
