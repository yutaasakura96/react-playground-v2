interface TabButtonProps {
  children: string;
  onSelect: () => void;
}

const TabButton = ({ children, onSelect }: TabButtonProps) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
