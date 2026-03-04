import type { HTMLAttributes, HTMLElementType } from 'react';

interface TabsProps extends HTMLAttributes<HTMLMenuElement> {
  buttons: React.ReactNode;
  children: React.ReactNode;
  ButtonsContainer: HTMLElementType;
}

const Tabs = ({ children, buttons, ButtonsContainer }: TabsProps) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
