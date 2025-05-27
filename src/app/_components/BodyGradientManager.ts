'use client';

import { useEffect } from 'react';

export default function BodyGradientManager({ hour }: { hour?: number }) {
  useEffect(() => {
    let localHour = hour ?? new Date().getHours();

    let gradient = '';
    if (localHour >= 6 && localHour < 12) {
      gradient = 'from-sky-500 to-blue-700'; // mañana
    } else if (localHour >= 12 && localHour < 18) {
      gradient = 'from-yellow-500 to-orange-700'; // tarde
    } else {
      gradient = 'from-sky-800 to-indigo-950'; // noche
    }

    document.body.className = `
      bg-gradient-to-r ${gradient}
      text-white antialiased
      transition-all duration-1000 ease-in-out
      min-h-screen
    `;
  }, [hour]);

  return null;
}
