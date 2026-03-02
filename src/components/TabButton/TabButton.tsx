interface TabButtonProps {
  children: string;
}

const TabButton = ({ children }: TabButtonProps) => {
  function handleClick() {
    console.log('clicked');
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};

export default TabButton;
