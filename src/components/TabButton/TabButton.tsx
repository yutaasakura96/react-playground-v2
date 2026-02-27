interface TabButtonProps {
  children: string;
}

const TabButton = ({ children }: TabButtonProps) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};

export default TabButton;
