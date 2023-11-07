
import Header from './components/Header/Header';
import CrucialConcepts from './components/CoreConcepts/CrucialConcepts';
import Examples from './components/CoreConcepts/Examples';
import './App.css';


function App() {

  return (
    <>
      <Header />
      <main>
        <CrucialConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;