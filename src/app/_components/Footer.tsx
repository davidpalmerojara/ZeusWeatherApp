import Link from 'next/link';

export default function Footer() {
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

  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/60">
      <small>&copy; 2025 David Palmero. All rights reserved</small>
      <ul className="flex mx-3 gap-x-3 sm:gap-x-9">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
