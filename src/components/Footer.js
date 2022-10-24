import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.paypal.me/jemimahkyla" target="_blank"><img src={navIcon1} alt="paypalDonation" /></a>
              <a href="https://www.amazon.com/baby-reg/nolancole-colegiocamacho-january-2023-saipan/FOD3XMVPQHVU" target="_blank"><img src={navIcon2} alt="amazonRegistry" /></a>
              <a href="https://www.instagram.com/jemimahkyla" target="_blank"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright © Vincent Camacho and Jemimah Colegio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
