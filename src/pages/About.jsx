import { forwardRef } from 'react'
import { Container } from 'react-bootstrap'

const About = forwardRef((props, ref) => {
  return (
    <>
      <Container className="section" ref={ref}>
        <h1 ref={ref}>About</h1>
        <p>
          ...
          <br />
          <br />
          <br />
          <br />
          <br />
          .... ...
          <br />
          <br />
          <br />
          <br />
          <br />
          .... ...
          <br />
          <br />
          <br />
          <br />
          <br />
          ....
        </p>
      </Container>
    </>
  )
})

export default About
