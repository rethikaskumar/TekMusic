import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Navbarc from './Component/Navbarc.js';
import BackgroundSlider from './Component/BackgroundSlider';
import './index.css';
import image1 from './Assets/Images/slider7.jpeg';
import React from 'react'
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
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

function Loader({loading}) {
  return (
    <div className="sweet-loading">
      <BackgroundSlider images={[image1]} duration={4} transition={1} blur={5}/>
      <ScaleLoader color={'white'} loading={loading} css={override} height={50} width={5} radius={4} margin={6} />
    </div>
  );
}



class Talenthunt extends React.Component {
    

  constructor(props){
    super(props)
    this.state = {loading: true}
    this.makeTimer()
  }
  
  makeTimer(){
    setInterval(() => {
        this.setState({loading: false})
    }, 0)
    
  }
  
  render(){

    let content = this.state.loading ? <Loader loading={this.state.loading}/> : (
      <div className="talent">
        <Navbarc />
        <BackgroundSlider images={[image1]} duration={3600} transition={1} blur={8}/>
        <div style={{display:"block"}}>
            <div className="bgslider2t">
              <div className="justify-content-md-center maincontent2"><font>Tek Music is now on the lookout for new members. If you're a passionate musician/mixer, use this golden opportunity to showcase your talent and get yourself enrolled in the club.</font></div>     
              <div className="justify-content-md-center maincontent2"><font>The talent hunt is open for all UG and PG students in PSG Tech, including PSG IAS students.</font></div>       
              <Link to="/Talenthunt/Classical" className='fontjoin'>
                <button className="button text-bt-2">
                  Classical Wing
                </button>
              </Link>
              <Link to="/Talenthunt/Light&Western" className='fontjoin'>
                <button className="button text-bt-2">
                  Light and Western Wing
                </button>
              </Link>
              <Link to="/Talenthunt/Media" className='fontjoin'>
                <button className="button text-bt-2">
                  Media Wing
                </button>
              </Link>
              <Link to="/Talenthunt/Mixing" className='fontjoin'>
                <button className="button text-bt-2">
                  Mixing Wing
                </button>
              </Link>
            </div>
          </div>
          <div className="bgslider2" style={{marginTop: '1rem'}}>
              <div className="maincontent3"><font>For any other queries, contact:</font></div>
              <div className="maincontent3"><font>Tharun +91-9380205535</font></div>
              <div className="maincontent3"><font>Sneha +91-8778569766</font></div>
          </div>
      </div>
    );
    return(<div>{content}</div>)
    
  }; 
}

export default Talenthunt;
