import type { CoreConceptType } from '../../data/data';
import './CoreConcept.css';

const CoreConcept = ({ title, description, image }: CoreConceptType) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
