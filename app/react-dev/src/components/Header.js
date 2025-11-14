import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">React Nations</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        
      </nav>
    </header>
  );
}
