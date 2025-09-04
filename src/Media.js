import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navbarc from './Component/Navbarc.js';
import BackgroundSlider from './Component/BackgroundSlider';
import './index.css';
import image1 from './Assets/Images/slider7.jpeg';

function Media() {
  return (
    <div className="talent">
      <Navbarc />
      <BackgroundSlider images={[image1]} duration={3600} />
      <div style={{ display: "block" }}>
        <div className="bgslider2">
          <div className="justify-content-md-center maincontent2">
            <span style={{ color: 'gold' }}>Media and Event Management Wing</span>
          </div>
          <div className="justify-content-md-center maincontent2">
            <span style={{ color: 'gold' }}>General Instructions</span>
          </div>
        </div>
        <div className="bgslider3">
          <div className="maincontent3"><li>Participants who wish to apply for multiple categories are encouraged to register for each category separately.</li></div>
          <div className="maincontent3"><li>Please note that the number of categories applied to will not increase or decrease the chance of getting in.</li></div>
          <div className="maincontent3"><li>All years are open to apply for the auditions.</li></div>
          <div className="maincontent3"><li>It will be purely based on the skills of the applicant in the respective category.</li></div>
          <div className="maincontent3"><li>Keep in mind that a well recorded video/audio will be easier to judge.</li></div>
          <div className="maincontent3"><li>Send us your portfolios! Your portfolio must include a brief summary of your past work and a concise list of skills you think you are adept at, with reference to building a social media presence for us.</li></div>
          <div className="maincontent3"><li>You can upload up to 5 files each of size 100 MB.</li></div>
          <div className="maincontent3"><li>Check out all the sub-verticals within this vertical and make sure you contribute appropriately to this wing!</li></div>
          <div className="maincontent3"><li>If you wish to share more files, upload them to a google drive and share the drive with editor access to whoever has the link. The drive will not be shared outside the club.</li></div>
          <div className="maincontent3"><li>Paste the link in a google doc and upload that document as a PDF or a document, so that we can redirect ourselves to your drive from that document.</li></div>
        </div>
        <div className="bgslider4">
          <Row xs={1} md={1} className="g-4">
            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title>
                    <div className="maincontent3t">Social Media and Content Creations / Event Management</div>
                  </Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Visalakshi +91-8903810098</div>
                    <div className="maincontent3">Rethika +91-9790196953</div>
                    <div className="maincontent3">Vijhay +91-6379276849</div>
                  </Card.Text>
                  <a href="https://forms.gle/Pi8UG6t6umTt9UPL6" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Media and Event Management</button>
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
              <button className="button text-bt-2">Classical Wing</button>
            </Link>
            <Link to="/Talenthunt/light-western" className='fontjoin'>
              <button className="button text-bt-2">Light and Western Wing</button>
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
      <div className="bgslider2" style={{ marginTop: '0rem' }}>
      <div className="maincontent3"><font>For any other queries, contact:</font></div>
        <div className="maincontent3">Rethika +91-9790196953</div>
        <div className="maincontent3">Vijhay +91-6379276849</div>
      </div>
      <div className="bgslider2" style={{ marginTop: '4rem' }} />
    </div>
  );
}

export default Media;
