import { forwardRef } from 'react'
import { Container } from 'react-bootstrap'

const Achievements = forwardRef((props, ref) => {
  return (
    <>
      <Container className="section" ref={ref}>
        <h1 ref={ref}>Achievements</h1>
      </Container>
    </>
  )
})

export default Achievements
