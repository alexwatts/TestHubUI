import React, {useEffect} from 'react';
import './App.css';
import ResultsContainer from "./features/results/components/ResultsContainer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function App() {

    useEffect(() => {
        const splash = document.querySelector('.App-splash');
        setTimeout(() => {
            splash!.classList.add('display-none')
        }, 2000)
    }, [])

  return (

    <div className="App">
      <div className="App-splash">
        <Row className='align-items-center h-100'>
            <Col className='h-20'>
                <h1 className="fade-in fst-italic fw-bold">
                  TestHub
                </h1>
            </Col>
        </Row>
      </div>
      <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">TestHub</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Products" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">TestHub</NavDropdown.Item>
                    </NavDropdown>
                  <NavDropdown title="Environments" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">STAGE</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

       <header className="App-header">
       </header>

       <ResultsContainer/>
    </div>
  );
}

export default App;
