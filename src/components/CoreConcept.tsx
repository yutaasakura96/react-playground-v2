interface CoreConceptProps {
  image: string;
  title: string;
  description: string;
}
const CoreConcept = (props: CoreConceptProps) => {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default CoreConcept;
