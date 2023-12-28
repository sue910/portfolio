import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky bg-transparent top-0 flex justify-center h-100px pa-10px">
      <div className="flex justify-between items-center max-w-1000px w-screen bg-transparent m-x-auto">
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
              <Link href="/" className="text-t3 fw-500">
                홈
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-t3 fw-500">
                프로젝트
              </Link>
            </li>
            <li>
              <button className="p-x-9 h-50px text-white bg-t1 fw-700 border-rd-0.375rem">
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
