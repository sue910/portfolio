'use client';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../components/Icon';
import { kakaoUrl } from '../constant';

export default function Header() {
  return (
    <header
      className={
        'sticky header-transition bg-transparent -top-px flex justify-center h-[100px] z-header sm:h-[60px] backdrop-blur-sm'
      }
    >
      <div className="container w-full flex justify-between items-center bg-transparent m-x-auto">
        <Link href="/">
          <Image
            className="header-transition sm:w-[100px]"
            src="/images/logos/suyeon-kim.svg"
            alt="Suyeon Kim Portfolio Home"
            width={156}
            height={42}
            priority={true}
          />
        </Link>
        <nav>
          <ul className="flex flex-row gap-6 items-center md:gap-5 sm:gap-4">
            <li>
              <Link
                href="/"
                className="text-t3 font-medium header-transition hover:text-black md:text-sm sm:text-sm"
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-t3 font-medium header-transition hover:text-black md:text-sm  sm:text-sm"
              >
                프로젝트
              </Link>
            </li>
            <li>
              <Link
                href={kakaoUrl}
                target="_blank"
                className="black-btn px-[36px] h-[50px] rounded-sm header-transition md:h-[40px] md:text-sm sm:text-sm sm:h-[40px] sm:w-[40px] sm:rounded-full sm:px-0"
              >
                <span className="sm:hidden">연락하기</span>
                <Icon
                  name="papar-plane"
                  className="hidden sm:block sm:relative sm:top-px"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
