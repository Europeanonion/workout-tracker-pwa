import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={`border p-4 rounded ${className || ''}`}>{children}</div>;
}

export function CardContent({ children }: PropsWithChildren) {
  return <div className="p-2">{children}</div>;
}