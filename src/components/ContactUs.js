// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import contactImg from "../assets/img/mom.svg";

export const ContactUs = () => {
  const [state, handleSubmit] = useForm("xzbwzovz");
  if (state.succeeded) {
   return (
    <section className="contact" id="connect">
      <center>
        <h2>Thanks for joining! 🌠🌌✨</h2>
      </center>
    </section>
   )
  }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__pulse" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>See you there 👪</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <input
                id="name"
                type="name" 
                name="name"
                required="true"
                placeholder="What is your name? ✨"
              />
              <ValidationError 
                prefix="Name" 
                field="Name"
                errors={state.errors}
              />
              <input
                id="phonenumber"
                type="phonenumber" 
                name="phone no."
                required="true"
                placeholder="What is your contact number? 📱"
              />
              <ValidationError 
                prefix="phone" 
                field="Phone No."
                errors={state.errors}
              />
              <textarea
                id="party"
                name="party"
                placeholder="Who will be coming with you? 👨‍👩‍👧‍👦"
              />
              <ValidationError 
                prefix="party" 
                field="Other people joining"
                errors={state.errors}
              />
              <span>
                <center>
                  <button type="submit" disabled={state.submitting}>
                    RSVP
                  </button>
                 </center>
              </span>
            </Row>
          </form>
         </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// if you want to put a label for a submission field
/*
<label htmlFor="name">
  label
</label>
*/
