import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navbarc from './Component/Navbarc.js';
import BackgroundSlider from './Component/BackgroundSlider';
import image1 from './Assets/Images/slider7.jpeg';

function Classical() {
  return (
    <div className="talent">
      <Navbarc />
      <BackgroundSlider images={[image1]} duration={3600} />
      
      <div style={{ display: "block" }}>
        <div className="bgslider2">
          <div className="justify-content-md-center maincontent2">
            <span style={{ color: 'gold' }}>Classical Wing</span>
          </div>
          <div className="justify-content-md-center maincontent2">
            <span style={{ color: 'gold' }}>General Instructions</span>
          </div>
        </div>

        <div className="bgslider3">
          <div className="maincontent3"><li>Participants who wish to apply for multiple categories are encouraged to register for each category separately.</li></div>
          <div className="maincontent3"><li>Please note that the number of categories applied to will not increase or decrease the chance of getting in.</li></div>
          <div className="maincontent3"><li>It will be purely based on the skills of the applicant in the respective category.</li></div>
          <div className="maincontent3"><li>Keep in mind that a well recorded video/audio will be easier to judge.</li></div>
          <div className="maincontent3"><li>While uploading the audition clip, please make sure that you name the file in the format: “RollNumber_Category” (e.g., 23XX40_Keyboard)</li></div>
        </div>

        {/* First Row */}
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Vocals</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Rethika +91-9790196953</div>
                  </Card.Text>
                  <a href="https://forms.gle/Z7BNdwjhkJwbt2dZ7" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Vocals</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Percussion</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Vijhay +91-6379276849</div>
                    <div className="maincontent3">Harshavarthan +91-7010191648</div>
                  </Card.Text>
                  <a href="https://forms.gle/udwegVQjUK2row5w6" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Percussion</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Second Row */}
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Violin</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Rethika +91-9790196953</div>
                  </Card.Text>
                  <a href="https://forms.gle/LNrBkXpdcN7gNc7JA" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Violin</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Veena</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Rethika +91-9790196953</div>
                  </Card.Text>
                  <a href="https://forms.gle/356CpGmhhLjbossY6" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Veena</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Other categories */}
        <div style={{ display: "block" }}>
          <div className="bgslider2" style={{ marginTop: '1rem' }}>
            <div className="justify-content-md-center maincontent2">Other categories</div>
            <Link to="/Talenthunt/light-western" className='fontjoin'>
              <button className="button text-bt-2">Light and Western Wing</button>
            </Link>
            <Link to="/Talenthunt/media" className='fontjoin'>
              <button className="button text-bt-2">Media and Event Management Wing</button>
            </Link>
            <Link to="/Talenthunt/mixing" className='fontjoin'>
              <button className="button text-bt-2">Mixing Wing</button>
            </Link>
            <Link to="/Talenthunt/other-instruments" className='fontjoin'>
              <button className="button text-bt-2">Other Instruments</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact footer */}
      <div className="bgslider2" style={{ marginTop: '1rem' }}>
        <div className="maincontent3t">For any other queries, contact:</div>
        <div className="maincontent3">Rethika +91-9790196953</div>
        <div className="maincontent3">Vijhay +91-6379276849</div>
      </div>

      <div className="bgslider2" style={{ marginTop: '4rem' }} />
    </div>
  );
}

export default Classical;
