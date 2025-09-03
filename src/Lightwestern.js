import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Navbarc from './Component/Navbarc.js';
import BackgroundSlider from './Component/BackgroundSlider';
import image1 from './Assets/Images/slider7.jpeg';

function Lightwestern() {
  return (
    <div className="talent">
      <Navbarc />
      <BackgroundSlider images={[image1]} duration={3600} />

      <div style={{ display: "block" }}>
        {/* General Instructions */}
        <div className="bgslider2">
          <div className="justify-content-md-center maincontent2">
            <font style={{ color: 'gold' }}>Light and Western Wing</font>
          </div>
          <div className="justify-content-md-center maincontent2">
            <font style={{ color: 'gold' }}>General Instructions</font>
          </div>
        </div>

        <div className="bgslider3">
          <div className="maincontent3">
            <li>Participants who wish to apply for multiple categories are encouraged to register for each category separately.</li>
          </div>
          <div className="maincontent3">
            <li>Please note that the number of categories applied to will not increase or decrease the chance of getting in.</li>
          </div>
          <div className="maincontent3">
            <li>It will be purely based on the skills of the applicant in the respective category.</li>
          </div>
          <div className="maincontent3">
            <li>Keep in mind that a well recorded video/audio will be easier to judge.</li>
          </div>
          <div className="maincontent3">
            <li>While uploading the audition clip, please make sure that you name the file you’re uploading in the specified format to avoid confusion “RollNumber_Category” (for eg: 23XX40_Keyboard)</li>
          </div>
        </div>

        {/* Categories */}
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Light Vocals</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Rethika +91-9790196953</div>
                    <div className="maincontent3">Prathusha +91-7397710114</div>
                    <div className="maincontent3">Ananya +91-6382063280</div>
                  </Card.Text>
                  <a href="https://forms.gle/wMc8QFVKUEqmAZgS8" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Light Vocals</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Western Vocals</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Kadeeja +91-7736472231</div>
                    <div className="maincontent3">Sudharshana +91-9988851751</div>
                    
                  </Card.Text>
                  <a href="https://forms.gle/vTrCGmrSaerxjdrP6" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Western Vocals</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* More categories */}
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Rap</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Prathusha +91-7397710114</div>
                  </Card.Text>
                  <a href="https://forms.gle/GEQuySK5WM1TCAFk8" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Rap</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Flute</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Sruthi +91-9597878579</div>
                  </Card.Text>
                  <a href="https://forms.gle/SrgQh2R2BYUrgp1w7" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Flute</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Keyboard / Guitar */}
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Keyboard</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Vijeyasri +91-9994305501</div>
                    <div className="maincontent3">Ashere Jeswin +91-9500044291</div>
                  </Card.Text>
                  <a href="https://forms.gle/xA3gpMsQhMLG1SCb9" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Keyboard</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Guitar</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Rethika +91-9790196953</div>
                    <div className="maincontent3">Vijhay +91-6379276849</div>
                  </Card.Text>
                  <a href="https://forms.gle/yoX7j14LbFbAgi4EA" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Guitar</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Violin / Drums */}
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
                  <Card.Title><div className="maincontent3t">Drums</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Vijhay +91-6379276849</div>
                    <div className="maincontent3">Harshavarthan +91-7010191648</div>
                  </Card.Text>
                  <a href="https://forms.gle/8gC2MYBKgibrfgxD7" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Drums</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Beatboxing */}
        <div className="bgslider4">
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card border="light" style={{ background: 'none', borderRadius: '25px' }}>
                <Card.Body>
                  <Card.Title><div className="maincontent3t">Beatboxing</div></Card.Title>
                  <Card.Text>
                    <div className="maincontent3">For queries, Contact:</div>
                    <div className="maincontent3">Vijhay +91-6379276849</div>
                  </Card.Text>
                  <a href="https://forms.gle/eirtcV9ijRf6PuqF8" target="_blank" rel="noopener noreferrer" className='fontjoin'>
                    <button className="button text-bt-2">Register for Beatboxing</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Other Categories */}
        <div style={{ display: "block" }}>
          <div className="bgslider2" style={{ marginTop: '1rem' }}>
            <div className="justify-content-md-center maincontent2"><font>Other categories</font></div>
            <Link to="/Talenthunt/classical" className='fontjoin'>
              <button className="button text-bt-2">Classical Wing</button>
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

      {/* Contact Info */}
      <div className="bgslider2" style={{ marginTop: '1rem' }}>
        <div className="maincontent3t">For any other queries, contact:</div>
        <div className="maincontent3">Rethika +91-9790196953</div>
        <div className="maincontent3">Vijhay +91-6379276849</div>
      </div>

      <div className="bgslider2" style={{ marginTop: '4rem' }} />
    </div>
  );
}

export default Lightwestern;
