'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { kakaoUrl } from '../constant';
import Icon from '../components/Icon';

export default function Header() {
  const isUpdated = useRef(false);
  const headerRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setIsScroll(e.intersectionRatio < 1), //header가 stuck(top -1px)이 아닐때
      { threshold: [1] },
    );

    if (!isUpdated.current) {
      isUpdated.current = true;
    } else {
      observer.observe(headerRef.current!);
      return () => observer.unobserve(headerRef.current!);
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx(
        'sticky header-transition bg-transparent -top-px flex justify-center h-[100px] z-header sm:h-[60px] ',
        isScroll && 'h-[70px] sm:h-[50px] bg-white shadow-header',
      )}
    >
      <div className="container w-full flex justify-between items-center bg-transparent m-x-auto">
        <Link href="/">
          <Image
            className="header-transition sm:w-[100px]"
            src="/images/logos/suyeon-kim.svg"
            alt="Suyeon Kim Portfolio Home"
            width={isScroll ? 112 : 156}
            height={isScroll ? 30 : 42}
            priority={true}
          />
        </Link>
        <nav>
          <ul className="flex flex-row gap-6 items-center md:gap-5 sm:gap-4">
            <li>
              <Link
                href="/"
                className={clsx(
                  'text-t3 font-medium header-transition hover:text-black md:text-sm sm:text-sm',
                  isScroll && 'text-sm',
                )}
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={clsx(
                  'text-t3 font-medium header-transition hover:text-black md:text-sm  sm:text-sm',
                  isScroll && 'text-sm',
                )}
              >
                프로젝트
              </Link>
            </li>
            <li>
              <Link
                href={kakaoUrl}
                target="_blank"
                className={clsx(
                  'black-btn px-[36px] rounded-sm header-transition md:h-[40px] md:text-sm sm:text-sm sm:h-[40px] sm:w-[40px] sm:rounded-full sm:px-0',
                  isScroll ? 'text-sm h-[40px]' : 'h-[50px]',
                )}
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
