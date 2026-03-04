import type { ButtonHTMLAttributes } from 'react';

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isSelected: boolean;
}

const TabButton = ({ children, isSelected, ...props }: TabButtonProps) => {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
