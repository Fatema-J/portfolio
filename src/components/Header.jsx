import { forwardRef } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = forwardRef(
  ({ homeRef, aboutRef, projectsRef, contactRef, scrollToElement }, ref) => {
    return (
      <>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary" ref={ref}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <Nav.Link
                  onClick={() => {
                    scrollToElement(homeRef)
                  }}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    scrollToElement(aboutRef)
                  }}
                >
                  About
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    scrollToElement(projectsRef)
                  }}
                >
                  Projects
                </Nav.Link>

                <Nav.Link>Awarded</Nav.Link>

                <Nav.Link
                  onClick={() => {
                    scrollToElement(contactRef)
                  }}
                >
                  Contact
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
)

export default Header
