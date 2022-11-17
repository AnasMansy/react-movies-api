import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

const NavBar = ({ search }) => {

  const [item, setItem] = useState("")
  return (
    <Row className='m-0' >
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container  >
          <Navbar.Brand href="#">EXPLORE NEWEST MOVIES</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={e => search(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default NavBar
