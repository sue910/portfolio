'use client';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../components/Icon';
import { kakaoUrl } from '../constant';
import { useRef, useEffect } from 'react';

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headerCurrent = headerRef.current;
    if (!headerCurrent) return;

    observer.current = new IntersectionObserver(makeHeaderSticky, {
      root: null, // entrie viewport
      threshold: 0, // root의 0% 만큼 header가 보이거나(isIntersecting: true) 사라지면(isIntersecting: false) callback function을 실행
      rootMargin: `-${headerCurrent.getBoundingClientRect().height}px`, // 뷰포트에서 header 높이만큼 보이거나 남긴 시점을 콜백 메서드 호출시점으로 설정
    });
    observer.current.observe(headerCurrent);
    return () => observer.current?.unobserve(headerCurrent!);
  }, []);

  const makeHeaderSticky = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    // 뷰포트에서 header 섹션이 사라지는(isIntersecting: false) 시점에 header에 sticky 클래스를 추가
    if (!entry.isIntersecting)
      headerRef.current?.classList.add('sticky-header');
    // 다시 header 섹션이 보이는(isIntersecting: true) 시점에는 고정을 해제
    else headerRef.current?.classList.remove('sticky-header');
  };

  return (
    <header
      ref={headerRef}
      className="header-transition relative bg-transparent top-0 flex justify-center items-center h-[100px] z-header sm:h-[60px]"
    >
      <div className="container w-full flex justify-between items-center bg-transparent m-x-auto">
        <Link href="/">
          <Image
            className="logo sm:w-[100px]"
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
                className="text-t3 font-medium transition-colors hover:text-black md:text-sm sm:text-sm"
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-t3 font-medium transition-colors hover:text-black md:text-sm sm:text-sm"
              >
                프로젝트
              </Link>
            </li>
            <li>
              <Link
                href={kakaoUrl}
                target="_blank"
                className="black-btn px-[36px] h-[50px] rounded-sm transition-colors md:h-[40px] md:text-sm sm:text-sm sm:h-[40px] sm:w-[40px] sm:rounded-full sm:px-0"
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
