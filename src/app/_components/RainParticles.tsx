'use client';

import Particles from 'react-tsparticles';
import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';

export default function RainParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Esto carga el motor slim necesario
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'line',
          },
          opacity: {
            value: 0.2,
          },
          size: {
            value: { min: 1, max: 2 },
          },
          move: {
            enable: true,
            speed: 15,
            direction: 'bottom',
            straight: true,
            outModes: {
              default: 'out',
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
