export default function Card({ children }) {
    return <div className="border p-4 rounded">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
  }