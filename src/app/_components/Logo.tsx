import Image from 'next/image';
import { Baloo_Tamma_2 } from 'next/font/google';
import Link from 'next/link';

// ✅ Agregamos el subset requerido
const baloo_Tamma_2 = Baloo_Tamma_2({
  weight: '800',
  subsets: ['latin'], // <- requerido si preload está activo (por defecto lo está)
});

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className={`${baloo_Tamma_2.className} text-2xl font-bold tracking-tight`}>
        ZE<span className="text-amber-600">Ú</span>S
      </h1>
    </Link>
  );
}
