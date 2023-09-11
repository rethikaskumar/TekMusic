import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navbarc from './Component/Navbarc.js';
import BackgroundSlider from './Component/BackgroundSlider';
import './index.css';
import image1 from './Assets/Images/slider7.jpeg';


function Classical() {
  return (
    <div className="talent">
        <Navbarc />
        <BackgroundSlider images={[image1]} duration={3600}  />
        <div style={{display:"block"}}>
            <div className="bgslider2">
                <div className="justify-content-md-center maincontent2"><font style={{color:'gold'}}>Classical Wing</font></div>     
                <div className="justify-content-md-center maincontent2"><font style={{color:'gold'}}>General Instructions</font></div>
            </div>
            <div className="bgslider3">
                <div className="maincontent3"><font><li>Participants who wish to apply for multiple categories are encouraged to register for each category separately.</li></font></div>
                <div className="maincontent3"><font><li>Please note that the number of categories applied to will not increase or decrease the chance of getting in.</li></font></div>
                <div className="maincontent3"><font><li>It will be purely based on the skills of the applicant in the respective category.</li></font></div>
                <div className="maincontent3"><font><li>Keep in mind that a well recorded video/audio will be easier to judge.</li></font></div>
                <div className="maincontent3"><font><li>While uploading the audition clip, please make sure that you name the file you’re uploading in the specified format to avoid confusion “RollNumber_Category” (for eg: 23XX40_Keyboard)</li></font></div>
            </div>
            <div className="bgslider4">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Vocals</div></Card.Title>
                                <Card.Text>
                                <div className="maincontent3"><font>For queries, Contact: </font></div>
                                <div className="maincontent3"><font>Tharun +91-9380205535</font></div>
                                <div className="maincontent3"><font>Rishi +91-9080050189</font></div>
                                </Card.Text>
                                <a href="https://forms.gle/q7boLSBaqfGKkvu37" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Vocals</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Percussion</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Amruth +91-9488200354</font></div>      
                                </Card.Text>
                                <a href="https://forms.gle/QmEmwq7jFsvpCUPA9" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Percussion</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="bgslider4">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Violin</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Vishal +91-6360530676</font></div>
                                </Card.Text>
                                <a href="https://forms.gle/z95pBB62kBJYun678" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Violin</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                    <Col>
                        <Card border="light" style={{background: 'none', borderRadius: '25px'}}>
                            <Card.Body>
                                <Card.Title><div className="maincontent3t">Veena</div></Card.Title>
                                <Card.Text>
                                    <div className="maincontent3"><font>For queries, Contact: </font></div>
                                    <div className="maincontent3"><font>Rethika +91-9790196953</font></div>
                                </Card.Text>
                                <a href="https://forms.gle/DqV1wWzvzfP9w9Vh9" target="__blank" className='fontjoin'>
                                    <button className="button text-bt-2">Register for Veena</button>
                                </a>
                            </Card.Body >
                        </Card>
                    </Col>
                </Row>
            </div>

            <div style={{display:"block"}}>
                <div className="bgslider2" style={{marginTop: '1rem'}}>
                    <div className="justify-content-md-center maincontent2" ><font>Other categories</font></div>     
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
                    <Link to="/Talenthunt/otherInstruments" className='fontjoin'>
                        <button className="button text-bt-2">
                            Other Instruments
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="bgslider2" style={{marginTop: '1rem'}}>
            <div className="maincontent3t"><font>For any other queries, contact:</font></div>
            <div className="maincontent3"><font>Tharun +91-9380205535</font></div>
            <div className="maincontent3"><font>Sneha +91-8778569766</font></div>
        </div>
        <div className="bgslider2" style={{marginTop: '4rem'}} />
    </div>

  );
}

export default Classical;
