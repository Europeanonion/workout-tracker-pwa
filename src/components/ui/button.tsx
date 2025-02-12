import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
      <button onClick={onClick} className={`btn ${className}`}>
        {children}
      </button>
    );
  }