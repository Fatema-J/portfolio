import { forwardRef } from 'react'
import { Container } from 'react-bootstrap'

const Home = forwardRef((props, ref) => {
  return (
    <>
      <Container className="section" ref={ref}>
        <h1 ref={ref}>Home</h1>
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

export default Home
