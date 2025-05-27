'use client';

import { useEffect, useState } from 'react';

export default function GradientBackground({
  children,
  hour,
}: {
  children: React.ReactNode;
  hour?: number; // opcional
}) {
  const [bgClass, setBgClass] = useState('');

  useEffect(() => {
    let localHour = hour;

    if (localHour === undefined) {
      // Usamos hora del navegador
      localHour = new Date().getHours();
    }

    let gradient = '';
    if (localHour >= 6 && localHour < 12) {
      gradient = 'from-sky-500 to-blue-700'; // mañana
    } else if (localHour >= 12 && localHour < 18) {
      gradient = 'from-yellow-500 to-orange-700'; // tarde
    } else {
      gradient = 'from-sky-800 to-indigo-950'; // noche
    }

    setBgClass(`bg-gradient-to-r ${gradient}`);
  }, [hour]);

  return (
    <main
      className={`
        ${bgClass}
        text-white antialiased
        transition-all duration-1000 ease-in-out min-h-screen
      `}>
      {children}
    </main>
  );
}
