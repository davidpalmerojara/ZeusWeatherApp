import Image from "next/image";
import { Baloo_Tamma_2 } from "next/font/google";
import Link from "next/link";

const baloo_Tamma_2 = Baloo_Tamma_2({ weight: "800" });

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className={`${baloo_Tamma_2.className} text-2xl font-bold tracking-tight`}
      >
        ZE<span className="text-amber-600">Ú</span>S
      </h1>
    </Link>
  );
}
