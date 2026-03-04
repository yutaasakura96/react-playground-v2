import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/examples/Examples';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
