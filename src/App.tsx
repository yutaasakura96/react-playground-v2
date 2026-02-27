import componentsImg from './assets/components.png';
import CoreConcept from './components/CoreConcept';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title='Components'
              description='The core UI bulding block.'
              image={componentsImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
