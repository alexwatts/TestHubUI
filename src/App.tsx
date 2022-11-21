import React, {useEffect} from 'react';
import './App.css';
import ResultsContainer from "./features/results/components/ResultsContainer";
import Container from 'react-bootstrap/Container';


function App() {

    useEffect(() => {
        const splash = document.querySelector('.App-splash');
        setTimeout(() => {
            splash!.classList.add('display-none')
        }, 2000)
    }, [])


  return (

    <Container className="App">
      <div className="App-splash">
        <h1 className="fade-in header">
          TestHub
        </h1>
      </div>
       <header className="App-header">
       </header>
       <ResultsContainer/>
    </Container>
  );
}

export default App;
