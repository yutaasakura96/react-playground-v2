import { CORE_CONCEPTS } from '../../data/data';
import CoreConcept from '../CoreConcept/CoreConcept';
const CoreConcepts = () => {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.id} {...concept} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcepts;
