import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './Navigation.css' // Import your CSS file

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          sticky='top'
          key={expand}
          expand={expand}
          className='bg-body-tertiary mb-3'
        >
          <Container fluid>
            {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
            <Navbar.Brand className='center' href='#'>
              ParangiPettai Bus Timing
            </Navbar.Brand>
            <p className='small'>Credits: PNO-PNS</p>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='start'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Bus Routes
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className='d-flex'>
                  <Form.Control
                    type='search'
                    placeholder='Search'
                    className='me-2'
                    aria-label='Search'
                  />
                  <Button variant='Light'>Search</Button>
                </Form>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                  <div className='nav-container '>
                    <Nav.Link className='nav-link' href='#action1'>
                      PNO to CDM
                    </Nav.Link>
                    <Nav.Link href='#action2'>CDM to PNO</Nav.Link>
                    <Nav.Link href='#action3'>PNO to Cud</Nav.Link>
                    <Nav.Link href='#action4'>Cud to PNO</Nav.Link>
                  </div>
                  {/* <Nav.Link href='#action2'>Link</Nav.Link> */}
                  {/* <NavDropdown
                    title='Dropdown'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='#action5'>
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBar
