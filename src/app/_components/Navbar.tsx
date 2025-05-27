import Link from 'next/link';
import Logo from './Logo';
import path from 'path';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />
      <ul className="flex gap-x-6 text-sm">
        {routes.map((route) => (
          <li
            key={route.path}
            className="text-white/70 hover:text-white transition">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
