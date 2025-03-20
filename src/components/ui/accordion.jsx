import React, { useState } from 'react';
import './accordion.css';

export function Accordion({ children, type, collapsible, className }) {
  return <div className={`accordion ${className}`}>{children}</div>;
}

export function AccordionItem({ children, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log(`Toggling item: ${value}, current state: ${isOpen}`);
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      {React.Children.map(children, child => {
        if (child.type === AccordionTrigger) {
          return React.cloneElement(child, { onClick: handleToggle });
        }
        if (child.type === AccordionContent) {
          return isOpen && child;
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({ children, onClick, className }) {
  return (
    <button className={`accordion-trigger ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function AccordionContent({ children, className }) {
  return <div className={`accordion-content ${className}`}>{children}</div>;
}
