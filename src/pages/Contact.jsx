import { forwardRef } from 'react'
import { Container } from 'react-bootstrap'

const Contact = forwardRef((props, ref) => {
  return (
    <>
      <Container className="section" ref={ref}>
        <h1 ref={ref}>Contact</h1>
        <p></p>
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

export default Contact
