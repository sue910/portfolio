import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky bg-transparent top-0 flex justify-center h-[100px] px-[10px]">
      <div className="max-w-wrap flex justify-between items-center w-screen bg-transparent m-x-auto">
        <Link href="/">
          <Image
            src="/images/logos/suyeon-kim.svg"
            alt="Suyeon Kim Portfolio Home"
            width={156}
            height={42}
            priority={true}
          />
        </Link>
        <nav>
          <ul className="flex flex-row gap-6 items-center">
            <li>
              <Link
                href="/"
                className="text-t3 fw-500 transition-colors hover:text-black"
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-t3 fw-500 transition-colors hover:text-black"
              >
                프로젝트
              </Link>
            </li>
            <li>
              <button className="px-9 h-[50px] text-white bg-t1 fw-700 rounded-md transition-colors hover:bg-t2">
                연락하기
              </button>
            </li>
          </ul>
          {/* <Link href={"/projects?showDialog=y"}>프로젝트</Link> */}
        </nav>
      </div>
    </header>
  );
}
