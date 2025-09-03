import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navbarc from './Component/Navbarc.js';
import BackgroundSlider from './Component/BackgroundSlider';
import image1 from './Assets/Images/slider7.jpeg';

function OtherInstruments() {
  return (
    <div className="talent">
      <Navbarc />
      <BackgroundSlider images={[image1]} duration={3600} />
      <div style={{ display: "block" }}>
        <div className="bgslider2">
          <div className="justify-content-md-center maincontent2" style={{ color: 'gold' }}>Other Instruments</div>
          <div className="justify-content-md-center maincontent2" style={{ color: 'gold' }}>General Instructions</div>
        </div>
        <div className="bgslider3">
          <div className="maincontent3"><li>Participants who wish to apply for multiple categories are encouraged to register for each category separately.</li></div>
          <div className="maincontent3"><li>Please note that the number of categories applied to will not increase or decrease the chance of getting in.</li></div>
          <div className="maincontent3"><li>All years are open to apply for the auditions.</li></div>
          <div className="maincontent3"><li>It will be purely based on the skills of the applicant in the respective category.</li></div>
          <div className="maincontent3"><li>Keep in mind that a well recorded video/audio will be easier to judge.</li></div>
          <div className="maincontent3"><li>While uploading the audition clip, please make sure that you name the file you’re uploading in the specified format to avoid confusion “RollNumber_Category” (for eg: 23XX40_Keyboard)</li></div>
        </div>
        <div className="bgslider4">
          <Row xs={1} md={1} className="g-4">
            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Other Instruments</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Sudharshana +91-9988851751</div>
                    <div className="maincontent3">Harshavarthan +91-7010191648</div>
                  </Card.Text>
                  <a
                    href="https://forms.gle/BZu4WMkfFQSWJGwu6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fontjoin"
                  >
                    <button className="button text-bt-2">Register for Other Instruments</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ display: "block" }}>
          <div className="bgslider2" style={{ marginTop: '1rem' }}>
            <div className="justify-content-md-center maincontent2">Other categories</div>

            <Link to="/Talenthunt/classical" className='fontjoin'>
              <button className="button text-bt-2">
                Classical Wing
              </button>
            </Link>
            <Link to="/Talenthunt/light-western" className='fontjoin'>
              <button className="button text-bt-2">
                Light and Western Wing
              </button>
            </Link>
            <Link to="/Talenthunt/mixing" className='fontjoin'>
              <button className="button text-bt-2">
                Mixing Wing
              </button>
            </Link>
            <Link to="/Talenthunt/media" className='fontjoin'>
              <button className="button text-bt-2">
                Media Wing
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bgslider2" style={{ marginTop: '1rem' }}>
        <div className="maincontent3">For any other queries, contact:</div>
        <div className="maincontent3">Rethika +91-9790196953</div>
        <div className="maincontent3">Vijhay +91-6379276849</div>
      </div>
      <div className="bgslider2" style={{ marginTop: '4rem' }} />
    </div>
  );
}

export default OtherInstruments;
