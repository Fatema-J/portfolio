import { forwardRef } from 'react'
import { Container } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

const About = forwardRef((props, ref) => {
  return (
    <>
      <Container className="section" ref={ref}>
        <h1 ref={ref}>About</h1>
        <p>Who Am I?</p>
        <p>
          I'm a developer driven by continuous self-improvement and a desire to
          create meaningful change, with a strong background in programming
          fundamentals. Curious about AI and ML development. I enjoy playing
          volley ball, reading stories where the limit of your imagination is
          the sky and I also like looking for latest science discoveries from
          time to time.
        </p>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div>
                <img src="" alt="" />
                MERN Stack
              </div>
            </Col>
            <Col md="auto">
              <div>
                <img src="" alt="" />
                ML & AI
              </div>
            </Col>
            <Col md="auto">
              <div>
                <img src="" alt="" />
                Python
              </div>
            </Col>
            <Col md="auto">
              <div>
                <img src="" alt="" />
                HTML/CSS/JS
              </div>
            </Col>
            <Col md="auto">
              <div>
                <img src="" alt="" />
                Flutter
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
})

export default About
