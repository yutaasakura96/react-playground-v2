import CoreConcept from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { CORE_CONCEPTS } from './data/data';

function App() {
  function handleSelect(selectedButton: string) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.id} {...concept} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => {
                handleSelect('components');
              }}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect('jsx');
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect('props');
              }}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => {
                handleSelect('state');
              }}
            >
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
