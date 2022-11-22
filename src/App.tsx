import React, {useEffect} from 'react';
import './App.css';
import ResultsContainer from "./features/results/components/ResultsContainer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <h1 className="fade-in">
                  TestHub
                </h1>
            </Col>
        </Row>
      </div>
       <header className="App-header">
       </header>
       <ResultsContainer/>
    </div>
  );
}

export default App;
