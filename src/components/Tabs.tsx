import type { HTMLAttributes } from 'react';

interface TabsProps extends HTMLAttributes<HTMLMenuElement> {
  buttons: React.ReactNode;
  children: React.ReactNode;
}

const Tabs = ({ children, buttons }: TabsProps) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};

export default Tabs;
