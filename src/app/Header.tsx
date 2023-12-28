import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky bg-yellow top-0 flex justify-center">
      <div className="w-1000px bg-red relative">
        <Link href="/">
          <Image
            src="/images/logos/suyeon-kim.svg"
            alt="Suyeon Kim Portfolio Home"
            width={156}
            height={42}
            priority={true}
          />
        </Link>
        <nav></nav>
      </div>
    </header>
  );
}
