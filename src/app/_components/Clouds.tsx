'use client';

export default function Clouds() {
  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      {/* Nube 1 */}
      <div className="absolute top-10 left-[-20%] animate-cloud-slow">
        <CloudSVG size={120} />
      </div>
      {/* Nube 2 */}
      <div className="absolute top-32 left-[-30%] animate-cloud-medium">
        <CloudSVG size={200} />
      </div>
      {/* Nube 3 */}
      <div className="absolute top-60 left-[-40%] animate-cloud-fast">
        <CloudSVG size={150} />
      </div>
    </div>
  );
}

function CloudSVG({ size = 100 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 64 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 30H52C58 30 60 22 55 18C56 10 50 4 42 6C38 -2 28 -1 26 8C18 8 14 14 14 20C10 20 8 24 10 28C12 30 16 30 20 30Z"
        fill="white"
        opacity="0.6"
      />
    </svg>
  );
}
