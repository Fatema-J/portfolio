import { forwardRef } from 'react'
import { Container } from 'react-bootstrap'

const Home = forwardRef(({ aboutRef, scrollToElement }, ref) => {
  return (
    <>
      <Container className="section" ref={ref}>
        <h1>
          &lt; Hello World! /&gt; <span>I'm Fatema Aljonaid.</span> <br />
          A Software Engineer And ML Enthusiast
        </h1>
        <button 
          onClick={() => {
            scrollToElement(aboutRef)
          }}
        >
          Know me more
        </button>
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
