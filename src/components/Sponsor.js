import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import moneyImg1 from "../assets/img/moneyimg1.svg"
import paypalLogo from "../assets/img/paypal-logo.svg"
import amazonLogo from "../assets/img/amazon-logo.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Sponsor = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__pulse": ""}>
                <h2>Sponsor me!</h2>
                <p>There are three ways you can sponsor me 👶🏻</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__pulse" : ""}>
                    <Tab.Pane eventKey="first">
                      <center>
                        <h3>Hand deliver gifts or cash at my baby shower.</h3>
                        <div className="paragraph-image"><img src={moneyImg1} alt="money" /></div>
                      </center>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <center>
                        <h3>Donate to mommy's paypal.</h3>
                        <p2>(Tap the logo to donate)</p2>
                          <div className="paragraph-image"><a href="https://www.paypal.me/jemimahkyla" target="_blank" rel="noreferrer"><img src={paypalLogo} alt="paypaldonate" /></a></div>
                      </center>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <center>
                        <h3>Purchase an item on my Amazon registry.</h3>
                        <p2>(Tap the logo for my registry)</p2>
                          <div className="paragraph-image"><a href="https://www.amazon.com/baby-reg/nolancole-colegiocamacho-january-2023-saipan/FOD3XMVPQHVU" target="_blank" rel="noreferrer"><img src={amazonLogo} alt="baby registry" /></a></div>
                      </center>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
