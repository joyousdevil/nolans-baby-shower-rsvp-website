import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(5000 - Math.random() * 2000);
  const [setIndex] = useState(1);
  const toRotate = [ "🌌✨🌕", "🍼👶🏻🤱🏻", "🤍😋🖤" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(700);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  function scrollToBottom() {
    window.scroll({
      top: 1500,
      left:0,
      behavior: 'smooth',
    })
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                <span className="tagline">Nolan's Baby Shower 🎉</span>
                <h1>{`Hi! I'm Nolan! 🌌✨🌕`}</h1>
                  <p>My mommy's name is Mimay. 🤍🦋</p>
                  <p>My daddy's name is Vince. 🖤☕</p>
                  <p>Join my family on November 22nd for my baby shower! 🐱‍🐉</p>
                  <font color="white"><h3><b><u>Baby shower location</u>: TBD 🤔</b></h3></font>
              </div>}
            </TrackVisibility>
            <button onClick={scrollToBottom}>RSVP <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
