import { CORE_CONCEPTS } from '../../data/data';
import CoreConcept from '../CoreConcept/CoreConcept';
import Section from '../Section';
const CoreConcepts = () => {
  return (
    <Section title='Core Concepts' id='core-concepts'>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.id} {...concept} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
