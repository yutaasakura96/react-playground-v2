import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const Header = () => {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={reactImg} alt='Stylized Atom' />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
};

export default Header;
