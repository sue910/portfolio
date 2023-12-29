'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

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
        'sticky transition-all bg-transparent top-[-1px] flex justify-center h-[100px] px-[10px]',
        isScroll && 'h-[70px] bg-white shadow-header',
      )}
    >
      <div className=" max-w-wrap flex justify-between items-center w-screen bg-transparent m-x-auto">
        <Link href="/">
          <Image
            className="transition-all"
            src="/images/logos/suyeon-kim.svg"
            alt="Suyeon Kim Portfolio Home"
            width={isScroll ? 112 : 156}
            height={isScroll ? 30 : 42}
            priority={true}
          />
        </Link>
        <nav>
          <ul className="flex flex-row gap-6 items-center">
            <li>
              <Link
                href="/"
                className={clsx(
                  'text-t3 fw-500 transition-all hover:text-black',
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
                  'text-t3 fw-500 transition-all hover:text-black',
                  isScroll && 'text-sm',
                )}
              >
                프로젝트
              </Link>
            </li>
            <li>
              <button
                className={clsx(
                  'px-9 h-[50px] text-white bg-t1 fw-700 rounded-md transition-all hover:bg-t2',
                  isScroll && 'text-sm h-[40px]',
                )}
              >
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
